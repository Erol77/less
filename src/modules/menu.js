const cardsMenu = document.querySelector('.cards-menu');
const menu = () => {
    const restourant = 'food-band';
    const renderItems = (data) =>{
        console.log(data);
        data.forEach((elem,index,array) => {
            console.log(elem)});
            const {description, id, image, name, price} = elem;
    };
    console.log(a.data);
    // http://erol.qlihost.ru/db.json
    fetch(`./db/${restourant}.json`)
        .then((response) => response.json())
        .then((data) => {
            renderItems(data);
        })
        .catch((error)=>{
            console.log(error)
        });
        // .finally()
};
export default menu;
/*
<main class="main">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
					<h2 class="section-title restaurant-title">Пицца Плюс</h2>
					<div class="card-info">
						<div class="rating">
							4.5
						</div>
						<div class="price">От 900 ₽</div>
						<div class="category">Пицца</div>
					</div>
					<!-- /.card-info -->
				</div>
				<div class="cards cards-menu">
					<div class="card">
						<img src="img/pizza-plus/pizza-vesuvius.jpg" alt="image" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">Пицца Везувий</h3>
							</div>
							<!-- /.card-heading -->
							<div class="card-info">
								<div class="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
									«Халапенье», соус «Тобаско», томаты.
								</div>
							</div>
							<!-- /.card-info -->
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">545 ₽</strong>
							</div>
						</div>
						<!-- /.card-text -->
					</div>
					<!-- /.card --></div>*/