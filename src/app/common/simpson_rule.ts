export function simpson(x0: number, x1: number, num_seg: number, multiplier: number, fun: any) {
    var total_seg = num_seg * multiplier;
    var w = (x1 - x0) / total_seg;
    var sumatoria = 0;

    for (var i = 0; i <= total_seg; i++) {
        if (i == 0 || i == total_seg) {
            sumatoria += fun(x0 + (w * i));
        } else if (i%2 != 0) { //impar
            sumatoria += fun(x0 + (w * i)) * 4;
        } else { //par
            sumatoria += fun(x0 + (w * i)) * 2;
        }
    }
    var total = (w / 3) * (sumatoria);
    return total;
}

export function fx2(x: number) {
    return x * x;
}

export function f2x(x: number) {
    return 2.0 * x;
}

export function f1_x(x: number) {
    return 1.0 / x;
}