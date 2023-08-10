function calculateChange(jarCount) {
    const jarPrice = 40;
    const discountThreshold = 3;
    const discountPrice = 100;

    let totalCost = jarCount * jarPrice;
    if (jarCount >= discountThreshold) {
        let discountedJars = Math.floor(jarCount / discountThreshold);
        totalCost -= discountedJars * (jarPrice - (discountPrice / discountThreshold));
    }

    return totalCost;
}

function handleTransaction(jarCount, amountPaid) {
    const totalCost = calculateChange(jarCount);
    const change = amountPaid - totalCost;

    if (change >= 0) {
        return "Thank you for your purchase! Your change is " + change + " pesos.";
    } else {
        return "Sorry, you still owe " + (-change) + " pesos.";
    }
}