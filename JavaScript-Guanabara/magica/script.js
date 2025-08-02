const cardImages = document.querySelectorAll('.card-img');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const resultDiv = document.getElementById('result');

let currentIndex = 0;
let sum = 0;

const cardValues = {
    0: 1,    // primeira imagem - 1
    1: 2,    // segunda - 2
    2: 4,    // terceira - 4
    3: 8,    // quarta - 8
    4: 16,   // quinta - 16
    5: 32,   // sexta - 32
    6: 64    // sétima - 64
};

function checkNumber() {
    sum += cardValues[currentIndex];

    currentIndex++;

    if (currentIndex < cardImages.length) {
        showCard();
    } else {
        showResult();
    }
}

function showCard() {
    cardImages.forEach((img, index) => {
        if (index === currentIndex) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

function showResult() {
    const valoresEscolhidos = Object.values(cardValues).join(', ');
    const somaTotal = sum;

    resultDiv.textContent = `Seu número escolhido era: ${somaTotal}.`;
    resultDiv.style.display = 'block';
}


yesBtn.addEventListener('click', checkNumber);
noBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < cardImages.length) {
        showCard();
    } else {
        showResult();
    }
});


showCard();
