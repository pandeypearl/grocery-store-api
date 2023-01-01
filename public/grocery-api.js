fetch('http://localhost:3000/Bakery')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(Bakery => {
            const markup = `
            <div class="product bakery-products">
                <span class="product-id">${Bakery.id}</span>

                <div class="product-info">
                    <img src="${Bakery.img}" alt="${Bakery.name}">
                    <div>
                        <span class="name">${Bakery.name}</span>
                        <span class="type">${Bakery.type}</span>
                        <span class="desc">${Bakery.desc}</span>
                        <span class="price">R ${Bakery.price}.00</span>
                    </div>
                <div>

                <div class="raw-data bakery-btn bakery-products">
                    <div><span>Id</span><span>${Bakery.id}</span></div>
                    <div><span>Type</span><span>${Bakery.type}</span></div>
                    <div><span>Name</span><span>${Bakery.name}</span></div>
                    <div><span>Description</span><span>${Bakery.desc}</span></div>
                    <div><span>Image</span><span>${Bakery.img}</span></div>
                    <div><span>Price</span><span>${Bakery.price}</span></div>
                </div>
            </div>
            `;
            document.querySelector('.bakery-content').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));

fetch('http://localhost:3000/Butchery')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(Butchery => {
            const markup = `
            <div class="product butchery-products">
                <span class="product-id">${Butchery.id}</span>

                <div class="product-info">
                    <img src="${Butchery.img}" alt="${Butchery.name}">
                    <div>
                        <span class="name">${Butchery.name}</span>
                        <span class="type">${Butchery.type}</span>
                        <span class="desc">${Butchery.desc}</span>
                        <span class="price">R ${Butchery.price}.00</span>
                    </div>
                <div>

                <div class="raw-data butchery-btn">
                    <div><span>Id</span><span>${Butchery.id}</span></div>
                    <div><span>Type</span><span>${Butchery.type}</span></div>
                    <div><span>Name</span><span>${Butchery.name}</span></div>
                    <div><span>Description</span><span>${Butchery.desc}</span></div>
                    <div><span>Image</span><span>${Butchery.img}</span></div>
                    <div><span>Price</span><span>${Butchery.price}</span></div>
                </div>
            </div>
            `;
            document.querySelector('.butchery-content').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));

fetch('http://localhost:3000/Dairy')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(Dairy => {
            const markup = `
            <div class="product dairy-products">
                <span class="product-id">${Dairy.id}</span>

                <div class="product-info">
                    <img src="${Dairy.img}" alt="${Dairy.name}">
                    <div>
                        <span class="name">${Dairy.name}</span>
                        <span class="type">${Dairy.type}</span>
                        <span class="desc">${Dairy.desc}</span>
                        <span class="price">R ${Dairy.price}.00</span>
                    </div>
                <div>

                <div class="raw-data dairy-btn">
                    <div><span>Id</span><span>${Dairy.id}</span></div>
                    <div><span>Type</span><span>${Dairy.type}</span></div>
                    <div><span>Name</span><span>${Dairy.name}</span></div>
                    <div><span>Description</span><span>${Dairy.desc}</span></div>
                    <div><span>Image</span><span>${Dairy.img}</span></div>
                    <div><span>Price</span><span>${Dairy.price}</span></div>
                </div>
            </div>
            `;
            document.querySelector('.dairy-content').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));

fetch('http://localhost:3000/Fresh')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(Fresh => {
            const markup = `
            <div class="product fresh-products">
                <span class="product-id">${Fresh.id}</span>

                <div class="product-info">
                    <img src="${Fresh.img}" alt="${Fresh.name}">
                    <div>
                        <span class="name">${Fresh.name}</span>
                        <span class="type">${Fresh.type}</span>
                        <span class="desc">${Fresh.desc}</span>
                        <span class="price">R ${Fresh.price}.00</span>
                    </div>
                <div>

                <div class="raw-data fresh-btn">
                    <div><span>Id</span><span>${Fresh.id}</span></div>
                    <div><span>Type</span><span>${Fresh.type}</span></div>
                    <div><span>Name</span><span>${Fresh.name}</span></div>
                    <div><span>Description</span><span>${Fresh.desc}</span></div>
                    <div><span>Image</span><span>${Fresh.img}</span></div>
                    <div><span>Price</span><span>${Fresh.price}</span></div>
                </div>
            </div>
            `;
            document.querySelector('.fresh-content').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));

fetch('http://localhost:3000/Frozen')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(Frozen => {
            const markup = `
            <div class="product frozen-products">
                <span class="product-id">${Frozen.id}</span>

                <div class="product-info">
                    <img src="${Frozen.img}" alt="${Frozen.name}">
                    <div>
                        <span class="name">${Frozen.name}</span>
                        <span class="type">${Frozen.type}</span>
                        <span class="desc">${Frozen.desc}</span>
                        <span class="price">R ${Frozen.price}.00</span>
                    </div>
                <div>

                <div class="raw-data frozen-btn">
                    <div><span>Id</span><span>${Frozen.id}</span></div>
                    <div><span>Type</span><span>${Frozen.type}</span></div>
                    <div><span>Name</span><span>${Frozen.name}</span></div>
                    <div><span>Description</span><span>${Frozen.desc}</span></div>
                    <div><span>Image</span><span>${Frozen.img}</span></div>
                    <div><span>Price</span><span>${Frozen.price}</span></div>
                </div>
            </div>
            `;
            document.querySelector('.frozen-content').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));

fetch('http://localhost:3000/Seafood')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(Seafood => {
            const markup = `
            <div class="product seafood-products">
                <span class="product-id">${Seafood.id}</span>

                <div class="product-info">
                    <img src="${Seafood.img}" alt="${Seafood.name}">
                    <div>
                        <span class="name">${Seafood.name}</span>
                        <span class="type">${Seafood.type}</span>
                        <span class="desc">${Seafood.desc}</span>
                        <span class="price">R ${Seafood.price}.00</span>
                    </div>
                <div>

                <div class="raw-data seafood-btn">
                    <div><span>Id</span><span>${Seafood.id}</span></div>
                    <div><span>Type</span><span>${Seafood.type}</span></div>
                    <div><span>Name</span><span>${Seafood.name}</span></div>
                    <div><span>Description</span><span>${Seafood.desc}</span></div>
                    <div><span>Image</span><span>${Seafood.img}</span></div>
                    <div><span>Price</span><span>${Seafood.price}</span></div>
                </div>
            </div>
            `;
            document.querySelector('.seafood-content').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));

fetch('http://localhost:3000/Vegan')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(Vegan => {
            const markup = `
            <div class="product vegan-products">
                <span class="product-id">${Vegan.id}</span>

                <div class="product-info">
                    <img src="${Vegan.img}" alt="${Vegan.name}">
                    <div>
                        <span class="name">${Vegan.name}</span>
                        <span class="type">${Vegan.type}</span>
                        <span class="desc">${Vegan.desc}</span>
                        <span class="price">R ${Vegan.price}.00</span>
                    </div>
                <div>

                <div class="raw-data vegan-btn">
                    <div><span>Id</span><span>${Vegan.id}</span></div>
                    <div><span>Type</span><span>${Vegan.type}</span></div>
                    <div><span>Name</span><span>${Vegan.name}</span></div>
                    <div><span>Description</span><span>${Vegan.desc}</span></div>
                    <div><span>Image</span><span>${Vegan.img}</span></div>
                    <div><span>Price</span><span>${Vegan.price}</span></div>
                </div>
            </div>
            `;
            document.querySelector('.vegan-content').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));

fetch('http://localhost:3000/Wine')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(Wine => {
            const markup = `
            <div class="product wine-products">
                <span class="product-id">${Wine.id}</span>

                <div class="product-info">
                    <img src="${Wine.img}" alt="${Wine.name}">
                    <div>
                        <span class="name">${Wine.name}</span>
                        <span class="type">${Wine.type}</span>
                        <span class="desc">${Wine.desc}</span>
                        <span class="price">R ${Wine.price}.00</span>
                    </div>
                <div>

                <div class="raw-data wine-btn">
                    <div><span>Id</span><span>${Wine.id}</span></div>
                    <div><span>Type</span><span>${Wine.type}</span></div>
                    <div><span>Name</span><span>${Wine.name}</span></div>
                    <div><span>Description</span><span>${Wine.desc}</span></div>
                    <div><span>Image</span><span>${Wine.img}</span></div>
                    <div><span>Price</span><span>${Wine.price}</span></div>
                </div>
            </div>
            `;
            document.querySelector('.wine-content').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));
