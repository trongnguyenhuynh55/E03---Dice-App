function demo() : void {
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("img-name");
    let filename: string = input.value ;

    let image: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-1");
    image.src = "./img/" + filename;
}

function demo1() : void {
    const max: number = 6;
    const min: number = 1;
    let a: number = Math.floor(Math.random() * (max - min + 1) ) + min;
    let image1: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-1");
    image1.src = "./img/dice" + a + ".png";
    let b: number = Math.floor(Math.random() * (max - min + 1) ) + min;
    let image2: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-2");
    image2.src = "./img/dice" + b + ".png";
}
export{};