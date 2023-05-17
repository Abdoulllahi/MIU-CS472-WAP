const user = {
    salute: "",
    greet: () => {
        console.log(this);
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = (newSalute) => this.salute = newSalute;
        setFrench("Bonjour");
        // setFrench.apply(this, ["Bonjour"]);
        // setFrench.bind(this, "Bonjour")();
        console.log(this.salute); // Hello or Bonjour?
    }
};
user.greet();
console.log(user.salute);
console.log(window);
