export default function loadMenuIncio(){

	add([
		sprite('imgIntro2')
	]),
	wait(1, () => {
		add([
			text('Iniciar Juego', {
			  size: 45,
			  font: 'apl386'
			}),
			pos(width()/2, 250),
			origin('center')
		]);
	}),
	wait(2, () => {
		add([
			text('Instrucciones', {
			  size: 45,
			  font: 'apl386'
			}),
			pos(width()/2, 400),
			origin('center')
		]);
	}),
	wait(3, () => {
		add([
			text('Salir de juego', {
			  size: 45,
			  font: 'apl386'
			}),
			pos(width()/2, 550),
			origin('center')
		]);
	})
	
	
}