import kaboom from "kaboom";
import loadAssets from "./assets"
import loadInformacion from "./informacion";
import loadMenuInicio from "./menuInicio"

kaboom({
    fullscreen: true,   
    background: [46, 64, 83],
 })
//  * Cargando las images y sonidos desde assets.js
loadAssets()

const music = play('musicaFondo', {loop: true, volume: 1})
var linea;
var opcionMenu = 1;


//* Desde aqui empezamos a cargar los scenarios
scene('credits-0', () => {
	  
	wait(1, () => {
	  focus()
	  add([  
		text('presiona ESPACIADOR para comenzar', {
		  size: 28,
		  font: 'apl386'
		}),
		pos(width()/2, height()/2),
		origin('center')
	  ]);
	})
  
	onKeyPress('space', () => {
	  go('credits-1')
	})
})

scene('credits-1', () => {
	add([
		sprite('imgIntro')
	])

	wait(4, () => {
	  add([  
		text('Producido por su servidor', {
		  size: 28,
		  font: 'apl386'
		}),
		pos(width()/2, height()/2),
		origin('center')
	  ]);
	})
  
	wait(7, () => {
	  add([
		pos(width()/2, (height() - (height()*0.4))),
		sprite("hero", {anim: 'run'}),
		rotate(0),
		area(),
		origin('center'),
		scale(5),
		cleanup()
	  ])
	})
  
	wait(13, () => {
	  go('intro-1')
	})
})
  
// * Esla ecena del selecion de menu
scene('menu', () => {
	loadMenuInicio()

	wait(4, () => {
		linea = add([
			sprite('imgIntroLinia'),
			pos(width()/2, 280),
			origin('center')
		]);

		onKeyPress("enter", () => {
			switch (opcionMenu) {
				case 1:
					music.stop(),
					go("main",0)
					break;
				case 2:
					go("informacion")
					break;
				default:
					go('credits-0')
					break;
			}
		})
	})

	onKeyPress("down", () => {

		switch (opcionMenu) {
			case 1:
				linea.destroy();
				linea = add([
					sprite('imgIntroLinia'),
					pos(width()/2, 430),
					origin('center')
				]);
				opcionMenu = 2;
				break;
			case 2:
				linea.destroy();
				linea = add([
					sprite('imgIntroLinia'),
					pos(width()/2, 580),
					origin('center')
				]);
				opcionMenu = 3;
				break;
			default:
				linea.destroy();
				linea = add([
					sprite('imgIntroLinia'),
					pos(width()/2, 280),
					origin('center')
				]);
				opcionMenu = 1;
				break;
		}
	})

	onKeyPress("up", () => {

		switch (opcionMenu) {
			case 1:
				linea.destroy();
				linea = add([
					sprite('imgIntroLinia'),
					pos(width()/2, 580),
					origin('center')
				]);
				opcionMenu = 3;
				break;
			case 2:
				linea.destroy();
				linea = add([
					sprite('imgIntroLinia'),
					pos(width()/2, 280),
					origin('center')
				]);
				opcionMenu = 1;
				break;
			default:
				linea.destroy();
				linea = add([
					sprite('imgIntroLinia'),
					pos(width()/2, 430),
					origin('center')
				]);
				opcionMenu = 2;
				break;
		}
	})

	
}),

scene("informacion", () => {
	loadInformacion()
	wait(9, () => {
		add([
		  text('precione ESPACIADOR para continuar', {
			size: 22,
			font: 'apl386'
		  }),
		  pos(width()/2, height() - (height()*0.1)),
		  origin('center')
		]);
	})
	  
	onKeyPress("space", () => {
		console.log(onKeyPress);
		go("menu")
	});
}),

// * La escena de inicio 
scene('intro-1', () => {
	add([
		sprite('imgIntro1')
	])

	wait(0, () => {
	  add([
		  text('Educacion Vial', {
			size: 38,
			font: 'apl386'
		  }),
		  pos(width()/2, height()/4),
		  origin('center')
		]);
	})
  
	wait(3, () => {
	  add([
		  text('\n\n\n\nEres el que maneja, el auto', {
			size: 28,
			font: 'apl386'
		  }),
		  pos(width()/2, height()/2),
		  origin('center')
		]);
	})
  
	wait(5, () => {
	  add([
		  text('\n\n\n\n\n\nTu objetivo: Es conocer las normas Veiculares', {
			size: 28,
			font: 'apl386'
		  }),
		  pos(width()/2, height()/2),
		  origin('center')
		]);
	})
  
	wait(7, () => {
	  add([
		  text('\n\n\n\n\n\n\n\nAprende mientras juegas', {
			size: 28,
			font: 'apl386'
		  }),
		  pos(width()/2, height()/2),
		  origin('center')
		]);
	})
  
	wait(9, () => {
	  add([
		text('precione ESPACIADOR para continuar', {
		  size: 22,
		  font: 'apl386'
		}),
		pos(width()/2, height() - (height()*0.1)),
		origin('center')
	  ]);
	})
	
	onKeyPress('space', () => {
		go('menu')
	})
  })



scene("main", (levelIdx) => {

	// * Empesacos a CARGAR la pagina con el 'mapa' y la musica de fondo
	add([
		sprite('mapa'),
		scale(4,4)
	])

	const music = play("musicaFondo", {
		volume: 0.5,
		loop: true
	})

	// TODO: Analizar el codigo
	const SPEED = 320

	const characters = {
		"a": {
			sprite: "cebra",  //!Cambio "bag" por "cebra"
			msg: "Es un paso de Cebra, recuerda mirar a ambos lados",
		},
		// "b": {
		// 	sprite: "ghosty",
		// 	msg: "get out!",
		// },
	}


	const levels = [
		[
			" ",    
			" ",
			" =======================================================================================",
			" =  @        a                                                                         =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =           a                                                                         =",
			" ====       =============      =============      ==============      ==============   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			" ====       =============      =============      ==============      ==============   =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" ====       =============      =============      ==============      ==============   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =========           ========           ========            ========            =====",
		],
		[
			"---------",
			"-       -",
			"-       -",
			"-  $    -",
			"|       -",
			"-       -",
			"-     a -",  //!cambiando al bicho b por a
			"-   @   -",
			"---------",
		],
	]

	addLevel(levels[levelIdx], {
		width: 36,
		height: 36,
		// pos: vec2(64, 64),
		"=": () => [
			sprite("block"), //!cambiando "grass" por "block"
			area(),
			solid(),
		],
		// "-": () => [
		// 	sprite("steel"),
		// 	area(),
		// 	solid(),
		// ],
		// "$": () => [
		// 	sprite("key"),
		// 	area(),
		// 	"key",
		// ],
		"@": () => [
			sprite("hero"), //!cambiando "bean" por "hero"
			area(),
			solid(),
			scale(3),
			"player",
		],
		// "|": () => [
		// 	sprite("door"),
		// 	area(),
		// 	solid(),
		// 	"door",
		// ],

		any(ch) {
			const char = characters[ch]
			if (char) {
				return [
					sprite(char.sprite),
					area(),
					solid(),
					"character",
					{ msg: char.msg, },
				]
			}
		},
	})

	
	const player = get("player")[0]
	player.play("run")
	player.onUpdate(() => {

		if (player.pos.x < 953) {
			if (player.pos.y < 485) {
				camPos(953,485)		
			} else if (player.pos.y > 796) {
				camPos(953,796)		
			}else {
				camPos(953,player.pos.y)
			}
				
		}
		else if (player.pos.x > 2230) {
			if (player.pos.y < 485) {
				camPos(2230,485)		
			} else if (player.pos.y > 796) {
				camPos(2230,796)		
			}else {
				camPos(2230,player.pos.y)
			}
		} else {
			if (player.pos.y <= 485) {
				camPos(player.pos.x, 485)		
			} else if (player.pos.y >= 796) {
				camPos(player.pos.x, 796)		
			}else {
				camPos(player.pos)
			}
		}
	  })

	
	function addDialog() {
		const h = 160
		const pad = 16
		const bg = add([
			pos(0, height() - h),
			rect(width(), h),
			color(0, 0, 0),
			z(100),
		])
		const txt = add([
			text("", {
				width: width(),
			}),
			pos(0 + pad, height() - h + pad),
			z(100),
		])
		bg.hidden = true
		txt.hidden = true
		return {
			say(t) {
				txt.text = t
				bg.hidden = false
				txt.hidden = false
			},
			dismiss() {
				if (!this.active()) {
					return
				}
				txt.text = ""
				bg.hidden = true
				txt.hidden = true
			},
			active() {
				return !bg.hidden
			},
			destroy() {
				bg.destroy()
				txt.destroy()
			},
		}
	}

	let hasKey = false
	const dialog = addDialog()

	player.onCollide("key", (key) => {
		destroy(key)
		hasKey = true
	})

	player.onCollide("door", () => {
		if (hasKey) {
			if (levelIdx + 1 < levels.length) {
				music.stop()
				go("main", levelIdx + 1)
			} else {
				music.stop()
				go("win")
			}
		} else {
			dialog.say("you got no key!")
		}
	})


	player.onCollide("character", (ch) => {
		dialog.say(ch.msg)
	})

	const dirs = {
		"left": LEFT,
		"right": RIGHT,
		"up": UP,
		"down": DOWN,
	}

	for (const dir in dirs) {
		onKeyPress(dir, () => {
			dialog.dismiss()
		})
		onKeyDown(dir, () => {
			player.move(dirs[dir].scale(SPEED))
		})
	}

})

scene("win", () => {
	add([
		text("You Win!"),
		pos(width() / 2, height() / 2),
		origin("center"),
	])
})

go('credits-0')
