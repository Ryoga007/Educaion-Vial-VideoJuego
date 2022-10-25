// *Cargando todas la Imagenes y  Sonidos Necesarios

export default function loadAssets(){

    // * Cargando las imagenes que va necesitar el VideoJuego
const imgcUrlIntro = new URL("wallpaperbetter.jpg",import.meta.url)
loadSprite('imgIntro',imgcUrlIntro.pathname)

const imgcUrlIntro1 = new URL("wallpaperbetter1.jpg",import.meta.url)
loadSprite('imgIntro1',imgcUrlIntro1.pathname)

const imgcUrlIntro2 = new URL("wallpaperbetter2.jpg",import.meta.url)
loadSprite('imgIntro2',imgcUrlIntro2.pathname)

const imgcUrlIntroLinea = new URL("Linia.png",import.meta.url)
loadSprite('imgIntroLinia',imgcUrlIntroLinea.pathname)

const imgcUrlDocente = new URL("docente.png",import.meta.url)
loadSprite('imgDocente',imgcUrlDocente.pathname)

// const imgcUrlTextInstrucion = new URL("textInstrucion.png",import.meta.url)
// loadSprite('imgTextInstruccion',imgcUrlTextInstrucion.pathname)

const imgcUrl = new URL("mapaAset01.png",import.meta.url)
loadSprite('mapa',imgcUrl.pathname)

const imgURLBlock = new URL("block1.png", import.meta.url)
loadSprite("block", imgURLBlock.pathname )

const imgURLCebra = new URL("cono.png", import.meta.url)
loadSprite("cebra", imgURLCebra.pathname )

const musicUrl = new URL("TopGear.mp3",import.meta.url)
loadSound("musicaFondo", musicUrl.pathname)
  
const imgUrlCar = new URL("AutoSet01t.png",import.meta.url)
loadSpriteAtlas(imgUrlCar.pathname, {
  hero: {
    x: 1,
    y: 1,
    width: 64,
    height: 32,
    sliceX: 2,
    anims: {
      run: { from: 0, to: 1, loop: true, speed: 5 }
    }
  },
//   block: {
//     x: 1,
//     y: 1,
//     width: 30,
//     height: 30,
//     sliceX: 1
//   },
//   cebra: {
//     x: 1,
//     y: 1,
//     width: 30,
//     height: 30,
//     sliceX: 1
//   }
})
}