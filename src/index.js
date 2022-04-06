class Site {
    constructor(){
        this.boards = []
    }
    //constructor() =생성자 함수. 사이트 내에서 boards가 생기는 걸 예약하는 걸
    // 생성한다.

    //this가 바라보고 있는 어떤 객체. = 예약한다고 생각하면 됨.
    // 1. this의 첫번째 동작 방식은, this가 전역 객체(window)를 context 
    //객체로 갖는 것 
    // 2. 어떤 객체를 통해 함수가 호출된다면 그 객체가 바로 this의 context 
    // 객체가 된다.

    // 즉, 이미 위의 코드로 site는 무언가를 n 개 이상 생성한다.
    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].name === board.name){
                throw Error();
            }
        }
        board.check = true; // ? 
        this.boards.push(board); //이름이 다른 보드는 push로 추가 가능. 
    }
    //spec의 Site에서 생성된 board를 조회 -> addBoard에 '공지사항' 인 보드를 추가했다. 
    //board의 길이보다 적은 횟수만큼 반복 -> 대신 사이트 내에서 생선된 boards가 i만큼 반복
    //됐을 시, board의 이름이 정확하게 똑같은 것이 있으면 Error을 띄워라. 테스트에서 걸린
    //버그기 때문이고, 이건 테스트 코드이기에 에러를 보내줘야 함.

    findBoardByName(boardName) {
        return this.boards.find((board) => board.name === boardName)
    }
    //추가된  Board를 조회할 수 있다. 
};

class Board {
    constructor(boardName) {
        if (boardName === null) {
            throw new Error();
        } else if (boardName === '') {
            throw new Error();
        }
        this.name = boardName;
        this.check = false;
        this.article = [];
    };

    publish(article) {
        article.createdDate = new Date().toISOString();
        article.id = `${this.name}-${Math.random()}`;

        if (this.check === false) {
            throw new Error();
        }
        article.check = true;
        this.article.push(article);
    };

    getAllArticles() {
        return this.article;
    };
}

class Article {
    constructor(article) {
        const {subject, content, author} = article
        if (subject === null|| '') {
            throw new Error();
        } else if (content === null|| '') {
            throw new Error();
        } else if (author === null|| '') {
            throw new Error();
        }
        this.subject = subject
        this.content = content
        this.author = author
        this.comment = []; 
        this.check = false;
    };

    reply(comment) {
        if (!this.id) {
            throw new Error();
        }
        comment.createdDate = new Date().toISOString();
        comment.id = `${this.name}-${Math.random()}`;

        if (this.check === false) {
            throw new Error();
        }

        this.comment.push(comment)
    };

    getAllComments() {
        return this.comment;
    };

}

class Comment {
    constructor(comment) {
        const {content, author} = comment
        if (content === null|| '') {
            throw new Error();
        } else if (author === null|| '') {
            throw new Error();
        }
        this.content = content;
        this.author = author;
    };
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
