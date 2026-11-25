(() => {
    const canvas = document.querySelector('.hero-data');
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let nodes = [];
    let routes = [];
    let frame = null;
    let visible = true;

    function routePoint(route, progress) {
        const start = nodes[route.start];
        const end = nodes[route.end];
        const middleX = (start.x + end.x) / 2;
        const remaining = 1 - progress;
        return {
            x: remaining ** 3 * start.x
                + 3 * remaining ** 2 * progress * middleX
                + 3 * remaining * progress ** 2 * middleX
                + progress ** 3 * end.x,
            y: remaining ** 3 * start.y
                + 3 * remaining ** 2 * progress * start.y
                + 3 * remaining * progress ** 2 * end.y
                + progress ** 3 * end.y,
        };
    }

    function draw(time) {
        context.clearRect(0, 0, width, height);
        const seconds = time / 1000;

        for (const route of routes) {
            const start = nodes[route.start];
            const end = nodes[route.end];
            const middleX = (start.x + end.x) / 2;
            context.beginPath();
            context.moveTo(start.x, start.y);
            context.bezierCurveTo(middleX, start.y, middleX, end.y, end.x, end.y);
            context.strokeStyle = 'rgba(167, 139, 250, .18)';
            context.lineWidth = 1;
            context.stroke();

            const progress = (seconds / route.duration + route.phase) % 1;
            const point = routePoint(route, progress);
            const tail = routePoint(route, Math.max(0, progress - .07));
            const glow = context.createLinearGradient(tail.x, tail.y, point.x, point.y);
            glow.addColorStop(0, 'rgba(167, 139, 250, 0)');
            glow.addColorStop(1, 'rgba(196, 181, 253, .75)');
            context.beginPath();
            context.moveTo(tail.x, tail.y);
            context.lineTo(point.x, point.y);
            context.strokeStyle = glow;
            context.lineWidth = 2;
            context.stroke();
            context.fillStyle = 'rgba(221, 214, 254, .85)';
            context.fillRect(point.x - 1.5, point.y - 1.5, 3, 3);
        }

        nodes.forEach((node, index) => {
            const pulse = .3 + (Math.sin(seconds * 1.4 + index) + 1) * .12;
            context.strokeStyle = 'rgba(167, 139, 250, ' + pulse + ')';
            context.fillStyle = 'rgba(19, 19, 28, .85)';
            context.lineWidth = 1;
            context.beginPath();
            if (index % 3 === 0) {
                context.roundRect(node.x - 13, node.y - 16, 26, 32, 5);
                context.fill();
                context.stroke();
                for (let row = 0; row < 3; row++) {
                    context.fillStyle = 'rgba(167, 139, 250, .45)';
                    context.fillRect(node.x - 7, node.y - 9 + row * 8, 10, 2);
                    context.fillRect(node.x + 5, node.y - 9 + row * 8, 2, 2);
                }
            } else {
                context.arc(node.x, node.y, 4, 0, Math.PI * 2);
                context.fill();
                context.stroke();
            }
        });
    }

    function animate(time) {
        draw(time);
        frame = requestAnimationFrame(animate);
    }

    function updateAnimation() {
        cancelAnimationFrame(frame);
        frame = null;
        if (visible && !document.hidden && !reducedMotion.matches) {
            frame = requestAnimationFrame(animate);
        } else if (reducedMotion.matches) {
            draw(0);
        }
    }

    function resize() {
        const bounds = canvas.getBoundingClientRect();
        width = bounds.width;
        height = bounds.height;
        const density = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * density);
        canvas.height = Math.round(height * density);
        context.setTransform(density, 0, 0, density, 0, 0);

        const columns = width < 769 ? 3 : 6;
        const rows = width < 769 ? 4 : 3;
        nodes = [];
        routes = [];
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                const index = row * columns + column;
                nodes.push({
                    x: width * (.04 + column * .92 / (columns - 1)),
                    y: height * (.13 + row * .72 / (rows - 1)
                        + Math.sin(index * 2.3) * .045),
                });
                if (column > 0) {
                    routes.push({
                        start: index - 1, end: index,
                        duration: 3.5 + index % 4, phase: index * .23,
                    });
                }
                if (row > 0 && column % 2 === row % 2) {
                    routes.push({
                        start: index - columns, end: index,
                        duration: 5 + index % 3, phase: index * .17,
                    });
                }
            }
        }
        draw(0);
    }

    new ResizeObserver(resize).observe(canvas);
    new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        updateAnimation();
    }).observe(canvas);
    document.addEventListener('visibilitychange', updateAnimation);
    reducedMotion.addEventListener('change', updateAnimation);
    resize();
    updateAnimation();
})();
