function getComputerChoice()
{
    let num = Math.floor(Math.random() * 3);


    if(num==0)
    {
        return "rock";
    }
    else if(num==1)
    {
        return "scissor"
    }
    else
    {
        return "paper"
    }

}

function round(player,computer)
{
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player == "rock" && computer == "scissor")
    {
        return ("You win boss");
    }
    else if(player == "scissor" && computer == "paper")
    {
        return ("You win boss");
    }
    else if(player == "paper" && computer == "rock")
    {
        return ("You win boss");
    }
    else if (player == computer)
    {
        return ("It's a tie!");
    }
    else
    {
        return ("urh gaye ap");
    }


}

function game()
{
    for (let i=0; i<5;i++)
    {
        let input = prompt("Enter your choice sir! Rock, Paper, or Scissor?")
        console.log(round(input,getComputerChoice()))
    }
}

game()