let usr = 0;
        let btns = {
            btn1: "",
            btn2: "",
            btn3: "",
            btn4: "",
            btn5: "",
            btn6: "",
            btn7: "",
            btn8: "",
            btn9: "",
        };

        let winner = "";
        const player1 = document.querySelector("#player1");
        const player2 = document.querySelector("#player2");
        const head1 = document.querySelector(".head1");
        const head2 = document.querySelector(".head2");

        function getWinner(val)
        {
            if(val == "X")
                {
                winner = player1.value
                }
            else{
                winner = player2.value
            }
        }
        
        function enter(btn) {
            var button = document.getElementById(btn);
            
            if (button.innerHTML == "") {
                if (usr % 2 == 0) {
                    button.innerHTML = "X";
                    
                }
                else {
                    button.innerHTML = "O";
                    

                }
                console.log(button.innerHTML);
                btns[btn] = button.innerHTML;
                check(button.innerHTML);

                usr++;
                head1.classList.toggle("turn");
                head2.classList.toggle("turn");
            }
            
        }

        function check(val) {
            getWinner(val);
            if (btns.btn1 == val && btns.btn2 == val && btns.btn3 == val) {
                showResult(val,winner);

            }
            else if (btns.btn4 == val && btns.btn5 == val && btns.btn6 == val) {
                showResult(val,winner);
              
            }
            else if (btns.btn7 == val && btns.btn8 == val && btns.btn9 == val) {
                showResult(val,winner);
                
            }
            else if (btns.btn1 == val && btns.btn4 == val && btns.btn7 == val) {
                showResult(val,winner);
              
            }
            else if (btns.btn2 == val && btns.btn5 == val && btns.btn8 == val) {
                showResult(val,winner);
                
            }
            else if (btns.btn3 == val && btns.btn6 == val && btns.btn9 == val) {
                showResult(val,winner);
               
            }
            else if (btns.btn1 == val && btns.btn5 == val && btns.btn9 == val) {
                showResult(val,winner);
                
            }
            else if (btns.btn3 == val && btns.btn5 == val && btns.btn7 == val) {
                showResult(val,winner);
            }
            

        }


        let p1win = document.querySelector("#p1win");
        let p2win = document.querySelector("#p2win");
        function showResult(player,winnerName)
        {
            document.getElementById("result").innerHTML = "you win the game, player : " + player + ' Name : ' + winnerName;
            
            setTimeout(resetBoard,3000);
        }


        function resetBoard() {
            
            location.reload();
        }


        console.log(btns);