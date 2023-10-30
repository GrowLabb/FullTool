document.body.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        document.body.scrollLeft += 100; // Ajusta el valor de desplazamiento a tu preferencia
    } else {
        document.body.scrollLeft -= 100; // Ajusta el valor de desplazamiento a tu preferencia
    }
});