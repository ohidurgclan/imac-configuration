// variable declare
let bestPrice = document.getElementById('bestCost');
let memoryPrice = document.getElementById('extraMemory');
let storagePrice = document.getElementById('extraStorage');
let deliveryCharge = document.getElementById('extraDelivery');
let totalPriceDisplay = document.getElementById('totalPrice');
let finalCost = document.getElementById('footerFinalCost');
let promoInput = document.getElementById('promoInput');

function extraProductCost(product, price) {
    if (product == 'memory') {
        memoryPrice.innerText = price;
    } else if (product == 'storage') {
        storagePrice.innerText = price;
    } else if (product == 'deliveryCost') {
        deliveryCharge.innerText = price;
    }
    let totalPrice = parseInt(bestPrice.innerText) + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryCharge.innerText);

    totalPriceDisplay.innerText = totalPrice;
    finalCost.innerText = totalPriceDisplay;
}

function applyPromo() {
    let promoCode = "stevekaku";
    if (promoInput.value = promoCode) {
        let off20 = 20;
        let overAllCost = parseInt(finalCost.innerText);
        let twentyPercent = (off20 / 100) * overAllCost;
        overAllCost = overAllCost - twentyPercent;
        finalCost.innerText = overAllCost;
        document.getElementById('promoInput').value = '';
    }
}
// memory
document.getElementById('eightGbMemory').addEventListener('click', function () {
    extraProductCost('memory', 0);
});
document.getElementById('sixteenGbMemory').addEventListener('click', function () {
    extraProductCost('memory', 180);
});
// storage
document.getElementById('storage256').addEventListener('click', function () {
    extraProductCost('storage', 0);
});

document.getElementById('storage512').addEventListener('click', function () {
    extraProductCost('storage', 100);
});

document.getElementById('storage1tb').addEventListener('click', function () {
    extraProductCost('storage', 180);
});

// delivery
document.getElementById('freeDelivery').addEventListener('click', function () {
    extraProductCost('deliveryCost', 0);
});

document.getElementById('premiumDelivery')
    .addEventListener('click', function () {
        extraProductCost('deliveryCost', 20);
    });

//   apply promo
document.querySelector('.promo-button').addEventListener('click', function () {
    applyPromo();
});

