		
			window.onload = function(){
				getElement('btnPrev').disabled = true;
				getElement('btnResult').disabled = true;
			}
			var i=0;
			function Question(question, option1, option2){
			
			}
            var options = [];
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
                var isChecked = false;
                for(var j=0; j<options.length; j++) {
                    if (getElement(options[j].id_val).checked) {
                        questions[i].userAnswer = options[j].weightage;
                        isChecked = true;
                        console.log(options[j]);
                    }
                }
                return isChecked;
			}
			
			function displayResult()
			{
				for(var i=0; i<questions.length; i++){
                    console.log(questions[i].userAnswer);
                }
			}
			
			function previous(){	
				if(i > questions.length-1)
					i = questions.length-1;
				if(i > 0){
					i--;
                    alert(questions[i].userAnswer+"_radio");
					getElement(questions[i].userAnswer+"_radio").checked = true;
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
			
			
			