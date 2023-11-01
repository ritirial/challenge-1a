export function sumX(lista: number[]) {
    var sumatoria = 0;
    lista.forEach(num => sumatoria = sumatoria + num);

    return sumatoria;
}

export function sumXX(lista: number[]) {
    var sumatoria = 0;
    lista.forEach(num => sumatoria = sumatoria + num * num);

    return sumatoria;
}

export function sumXY(listaX: number[], listaY: number[]) {
    var sumatoria = 0;
    var index = 0;
    listaX.forEach(numX => {
        sumatoria = sumatoria + numX * listaY[index];
        index++;
    });

    return sumatoria;
}