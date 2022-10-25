export default function loadInformacion(){
    add([
		sprite('imgIntro2')
	]),
    
    wait(1, () => {
        add([
			pos(width()/1.7, height()/2),
			rect(1140, 690),
			color(83, 39, 56),
            origin('center')
			// z(100),
		])
		add([
			pos(width()/1.7, height()/2),
			rect(1100, 650),
			color(244, 246, 247),
            origin('center')
			// z(100),
		])
	})

    wait(2, () => {
		add([
			text('Instrucciones\ndel Juego ', {
			  size: 60,
			  font: 'apl386',
			}),
			color(23, 32, 42),
			pos(width()/1.7, height()/6),
			origin('center')
		])
	})

    wait(3, () => {
		add([
			sprite('imgDocente'),
			pos(width()/4, height()/2),
            scale(0.8),
			origin('center')
		])
	})
    
}