class Add {
    constructor(...words) {
        this.words = words;
  
    }
    print() {
       //create a variable to store the new word
      let newword = "";
      for (let word of this.words)
      {
        //for each word of the words collection
        //add the current word and the $ simbol
        newword = newword + "$" + word; 
      }
      //print the new world with the $ simbol at the back
      console.log(newword+"$"); 
    }
   
  }
  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  x.print();
  y.print();
  z.print();