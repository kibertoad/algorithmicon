function implementationFn(inputLines) {
  const bestDeal = {
    buyPrice: undefined,
    sellPrice: undefined
  }
  const currentDeal = {
    buyPrice: undefined,
    sellPrice: undefined
  }

  inputLines.forEach((inputLine) => {
    const currentPrice = Number.parseInt(inputLine)

    if (currentDeal.sellPrice < currentPrice || currentDeal.sellPrice === undefined) {
      currentDeal.sellPrice = currentPrice
    }
    if (bestDeal.sellPrice < currentPrice || bestDeal.sellPrice === undefined) {
      bestDeal.sellPrice = currentPrice
    }

    if (currentDeal.buyPrice > currentPrice || currentDeal.buyPrice === undefined) {
      currentDeal.buyPrice = currentPrice
      currentDeal.sellPrice = currentPrice
    }
    if (bestDeal.buyPrice === undefined) {
      bestDeal.buyPrice = currentPrice
    }

    if (getProfit(currentDeal) > getProfit(bestDeal)) {
      bestDeal.buyPrice = currentDeal.buyPrice
      bestDeal.sellPrice = currentDeal.sellPrice
    }
  })

  return getProfit(bestDeal)
}

function getProfit(deal) {
  return deal.sellPrice - deal.buyPrice
}

module.exports = {
  implementationFn
}
