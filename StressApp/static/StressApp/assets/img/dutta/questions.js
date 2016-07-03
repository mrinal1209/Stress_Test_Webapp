			window.onload = function(){
				getElement('btnPrev').disabled = true;
				getElement('btnResult').disabled = true;
			}
			var i=0;
			function Question(question, option1, option2){
			
			}
			var questions=[
				{
					questiontext:"When you couldn't pass any examination ?",
				},
				{
					questiontext:"When you couldn't win any competition ?",
				},
				{
					questiontext:"When you lost a significant amount of money or valuables ?",
				},
				{
					questiontext:"When you broke or damaged an expensive article or device ?",
				},
				{
					questiontext:"When you had to borrow some significant amount from your friend ?",
				},
				{
					questiontext:"When your parents faced intensive financial crisis ?",
				},
				{
					questiontext:"When you faced any physical medical treatment ?",
				},
				{
					questiontext:"When someone close to you suffered from illness ?",
				},
				{
					questiontext:"When you went out on a date for the first time ?",
				},
				{
					questiontext:"When you started a serious relationship or got engaged ?",
				},
				{
					questiontext:"When you broke a serious relationship or engagement ?",
				},
				{
					questiontext:"When you had to part from girlfriend /boyfriend with or without serious argument ?",
				},
				{
					questiontext:"When you lost a true friend due to misunderstanding ?",
				},
				{
					questiontext:"When you were not able to find any life partner ?",
				},
				{
					questiontext:"When you had first sexual experience ?",
				},
				{
					questiontext:"When there was no source of income in the family ?",
				},
				{
					questiontext:"When your parents got separated legally or otherwise ?",
				},
				{
					questiontext:"When your mother began to work ?",
				},
				{
					questiontext:"When someone close to you passes away ?",
				},
				{
					questiontext:"When you had first experience of smoking/ using drugs/drinking alcohol ?",
				}
			];
			function next()
			{	
				// this checks whether user to the last question or not
				if(i <= questions.length-1){
					if(handleUserAnswer()){
						i++;
						if(i <= questions.length-1)
							document.getElementById('ques').innerHTML=questions[i].questiontext;
						getElement('btnPrev').disabled = false;
					}
					else{
						alert("please select an option");
					}
				}
				else{
					getElement('btnResult').disabled = false;
					alert('This was the last question.');
				}
				if(i>=19) getElement('btnResult').disabled = false;
			}
			
			function handleUserAnswer(){
				if(document.getElementById('1_radio').checked)
				{
					questions[i].userAnswer = 1;
				}
				else if(document.getElementById('2_radio').checked)
				{
					questions[i].userAnswer = 2
					console.log("working");
				}
				else if(document.getElementById('3_radio').checked)
				{
					questions[i].userAnswer = 3;
				}
				else if(document.getElementById('4_radio').checked)
				{
					questions[i].userAnswer = 4;
				}else if(document.getElementById('5_radio').checked)
				{
					questions[i].userAnswer = 5;
				}else{
					return false;
				}
				return true;
			}
			
			function displayResult()
			{
				for(var a=0; a<i; a++){
					console.log(questions[a].userAnswer);
				}
			}
			
			function previous(){	
				if(i > questions.length-1)
					i = questions.length-1;
				if(i > 0){
					i--;
					switch(questions[i].userAnswer){
						case 1:
							document.getElementById('1_radio').checked = true;
							break;
						case 2:
							getElement('2_radio').checked = true;
							break;
						case 3:
							getElement('3_radio').checked = true;
							break;
						case 4:
							getElement('4_radio').checked = true;
							break;
						case 5:
							getElement('5_radio').checked = true;
							break;
					}
					document.getElementById('ques').innerHTML=questions[i].questiontext;
				}
				else{
					alert("can't go back!");
				}
				return false;
			}
			
			function getElement(id){
				return document.getElementById(id);
			}
			
			function getResult(){
				var sum = 0;
				for(var i=0; i<questions.length; i++){
					sum += questions[i].userAnswer;
					console.log(i+" : " + questions[i].userAnswer);
				}
				alert("Result : " + sum);
			}
			