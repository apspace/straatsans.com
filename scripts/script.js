
window.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('main-text');
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouchDevice) {
        document.addEventListener('mousemove', e => {
            const weight = Math.round(100 + (e.clientX / window.innerWidth) * 800);
            const slant = Math.round(0 + (e.clientY / window.innerHeight) * 12);
            text.style.fontVariationSettings = `'wght' ${Math.round(weight)}, 'slnt' ${slant.toFixed(1)}`;
            document.getElementById('debug-panel').innerHTML =
                `Weight: ${Math.round(weight)}<br>Slant: ${slant}`;
        });
    } else {

        let t = 0;
        let s = 0;

        function easedSin(t, power = 2) {
            const raw = 0.5 - 0.5 * Math.cos(t);
            return Math.pow(raw, power);
        }

        function animate() {
            const weight = 100 + easedSin(t, 1) * 800;
            const slant = 0 + easedSin(s, 1.5) * 12;

            text.style.fontVariationSettings = `'wght' ${Math.round(weight)}, 'slnt' ${slant.toFixed(1)}`;
            document.getElementById('debug-panel').innerHTML =
                `Weight: ${Math.round(weight)}<br>Slant: ${Math.round(slant)}`;
            t += 0.02;
            s += 0.015;
            requestAnimationFrame(animate);
        }
        animate();
    };


});

