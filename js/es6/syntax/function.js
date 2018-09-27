// returns true
let func = (n1, n2=n1) => console.log(n1 == n2);

func(1);
// returns false

func = (n1=n2, n2) => console.log(n1 == n2);
func(1);