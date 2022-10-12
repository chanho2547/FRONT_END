/**
 * 생성자를 만드는 방법
 * 함수 선언문으로 정의 하는 방법
 */

// function Card(suit, rank) {
//     this.suit = suit;
//     this.rank = rank;
// }

// Card.prototype.show = function() {
//     console.log(this.suit + this.rank);
// }

// let card = new Card(5,5);
// card.show();

// let card2 = new Card(100,200);
// card2.show();

// 클래스 선언문

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    } 
    show() {
        console.log(this.suit + this.rank);
    }   
}

let card = new Card(5,4);
card.show();