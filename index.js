	let flag = true
    let colors = ['red', 'blue', 'gold']
    let chicagoStartups = [
        '  Interior   Define  ',
        'Classkick',
        'teaBOT  .$',
        'Pritzker Group Venture Capital',
        'Teln!yx !!',
        'ShipBob ~~$$$',
        'Hologram',
        'Tovala    ',
        '    MANOR',
        'ShuttleCloud 999987',
        'gtrot @@@@@',
        'DealsGoRound ****',
        ' Groovebug',
        'Stage$$$Bloc',
        'Shiftgig',
        'ParkWhiz'
    ]
	
    let clearDocument = () => {
        let rootDiv = document.getElementById('rootContainer')
        if (rootDiv) {
            while (rootDiv.hasChildNodes()) {
                rootDiv.removeChild(rootDiv.lastChild)
            }
        }
    }
    
	let initDocument = () => {
        clearDocument()
        let rootDiv = document.createElement('div')
        rootDiv.id = 'rootContainer'
        let companyNamesContainer = document.createElement('div')
		companyNamesContainer.id = 'leftContainer'
        chicagoStartups.forEach( (chicagoStartup, index) => {
            let childDiv = document.createElement('div')
            let text = document.createTextNode(index.toString().concat(' .) ').concat(chicagoStartup))
            childDiv.appendChild(text)
            companyNamesContainer.appendChild(childDiv)
        })
        rootDiv.appendChild(companyNamesContainer)
        document.body.appendChild(rootDiv)
    }
	
    let renderReversedElements = () => {
        let reverseContainer = document.getElementById('reverseContainer')
        let reversedChicagoStartups = []
        if (reverseContainer) {
            if (reverseContainer.hasChildNodes()) {
                while (reverseContainer.hasChildNodes()) {
                    reversedChicagoStartups.push(reverseContainer.lastChild.innerHTML)
                    reverseContainer.removeChild(reverseContainer.lastChild)
                }
                reversedChicagoStartups.forEach((chicagoStartup, index) => {
                    console.log(chicagoStartup)
                    let childDiv = document.createElement('div')
                    let text = document.createTextNode(chicagoStartup)
                    childDiv.appendChild(text)
                    reverseContainer.appendChild(childDiv)
                })
            }
            else {
                //TODO:: REPLACE [chicagoStartups.reverse()] WITH A FUNCTION CALLED "chicagoStartupsReverse"
                chicagoStartupsReverse().forEach((startup) => {
                    let childDiv = document.createElement('div')
                    let text = document.createTextNode(startup)
                    childDiv.appendChild(text)
                    reverseContainer.appendChild(childDiv)
                })
            }
        }
    }
    
	let chicagoStartupsReverse = () => {
        let reversedStartups = []
		let n = chicagoStartups.length
		
		for(let i=0; i< n; i++) {
			reversedStartups[i] = chicagoStartups[n-1-i]
		}
		console.log(reversedStartups)
        /*
            TODO: REVERSE THE CONTENTS OF THE ARRAY WITHOUT USING THE BUILT IN REVERSE METHOD
                  RETURN THE REVERSED ARRAY
            TIPS: 
                1.  REVIEW JAVASCRIPT ARRAY DATA STRUCTURE AND THE BUILTIN METHODS PROVIDED TO ALL ARRAYS
                2.  THIS IS A COMMON JOB INTERVIEW QUESTION, THAT SHOULD BE SOLVABLE BASED ON AN UNDERSTANDING OF
                    DATA STRUTUCTURES REGARDLESS OF THE PROGRAMMING LANGUAGE
        
        */
        return reversedStartups
    }
	
    let cleanAndCountCharacters = () => {
        console.log('CLEAN AND COUNT CHARACTERS')
        /*
            TODO: REMOVES ANY SPECIAL CHARACTERS FROM EACH COMPANY NAME AND
              DISPLAYS THE NUMBER OF REMAINING CHARACTERS NEXT TO THE FULL WORD.
              DONT FORGET TO REMOVE LEADING AND TRAILING WHITESPACES AS WELL
        */
		
		let arrayCharters = document.getElementById('rootContainer').childNodes[0]
		for(let i=0; i<arrayCharters.childNodes.length; i++){
			console.log(i)
			let sum = 0
			if(arrayCharters.childNodes[i].nodeType === 1){
				let ch = arrayCharters.childNodes[i].innerText.replace(/^.*\)/,'').replace(/[^a-zA-Z0-9\s]/g,'').replace(/(^\s*)|(\s*$)/g,'')
				
				for(let i=0; i < ch.length; i++) {	
					console.log(ch.charAt(i))
					if(ch.charAt(i) != ' '){
						sum++
					}
				}
				
				arrayCharters.childNodes[i].innerText = i.toString().concat(' .) ').concat(ch).concat(' ' + sum)
				document.getElementById('btnClear').disabled = true
			}  
		}  
    }
    
    let initReverse = () => {
        let reverseContainer = document.createElement('div')
        reverseContainer.id = 'reverseContainer'
        let reverseBtn = document.createElement('button')
        let btnText = document.createTextNode('Reverse')
        reverseBtn.onclick = renderReversedElements
        reverseBtn.appendChild(btnText)
		reverseBtn.className = 'btnStyle colorSuccess'
        let reverseButtonContainer = document.createElement('div')
		reverseButtonContainer.className = "classContainer"
		reverseButtonContainer.id = "midContainer"
        reverseButtonContainer.appendChild(reverseBtn)
		reverseButtonContainer.appendChild(reverseContainer)	

        document.getElementById('rootContainer').appendChild(reverseButtonContainer)
        
    }
	
	let initToggle = () => {
		let toggleContainer = document.createElement('div')
        toggleContainer.id = 'toggleContainer'
        let toggleBtn = document.createElement('button')
        let btnText = document.createTextNode('Toggle')
        toggleBtn.onclick = toggleDisplay
        toggleBtn.appendChild(btnText)
		toggleBtn.className = 'btnStyle colorWarning'
        let toggleButtonContainer = document.createElement('div')
		toggleButtonContainer.className = 'classContainer'
		toggleButtonContainer.id = 'rightContainer'
        toggleButtonContainer.appendChild(toggleBtn) 
		toggleButtonContainer.appendChild(toggleContainer) 		

		document.getElementById('rootContainer').appendChild(toggleButtonContainer)
	}
	
    let toggleDisplay = () => {
        /*
        TODO: REVIEW THE CODE IN THE PROVIDED REVERSE EXAMPLE, USE JAVASCRIPT TO ADD A CLICKABLE BUTTON 
        CALLED "Toggle Display" ... WHEN THE USER CLICKS THE BUTTON, IT RENDERS THE DISPLAY OF THE COMPANY NAMES 
        FROM VERTICAL, TO HORIZONTAL.
        IF THE USER CLICKS THE TOGGLE BUTTON AGAIN THE NAMES SHOULD ONCE AGAIN BE DISPLAYED VERTICALLY.
        TIPS: 
            1.  MAKE SURE TO READ AND UNDERSTAND THE DIFFERENCE BETWEEN BLOCK ELEMENTS SUCH AS A DIV, 
                AND INLINE ELEMENTS SUCH AS A SPAN.
            2.  DIVIDE AND CONQUER.
            3.  
        */
		
		let toggleContainer = document.getElementById('toggleContainer')		
        if (toggleContainer) {
			toggleContainer.innerHTML = ''
            chicagoStartups.forEach( (chicagoStartup, index) => {
				let child
				if(flag) {
					child = document.createElement('span')
				}
				else {
					child = document.createElement('div')
				}
					
                let text = document.createTextNode(index.toString().concat(' .) ').concat(chicagoStartup + ' '))
                child.appendChild(text)
                toggleContainer.appendChild(child)
            })
		   flag = !flag 	
        }	
    }
    
    let run = () => {
        initDocument()
        initReverse()
		initToggle()
    }
	
    run()
    
    let flags = {
        displayInstructions: true
    };
	
    //TODO INVOKE THIS ANONYMOUS FUNCTION TO DISPLAY HOMEWORK INSTRUCTIONS IN THE CONSOLE
    ( () => {
        if (flags.displayInstructions) {
            console.log(`
                            ASSUMPTIONS: !!! NO JQUERY !!! 
                                         TODO INDICATES THAT A SOLUTION IS REQUIRED
                                         PLEASE INCLUDE YOUR GITHUB URL AS A COMMENT
                                         EX. // https://github.com/Chandler-Gegg/javascript101.git
                            Feel free to complete the exercises in whatever order you like.  
                            Make sure to push your code to your own github repo as well as SUBMIT A ZIPFILE TO D2L.
                            HOMEWORK IS DUE WEDNESDAYS AT MIDNIGHT NO EXCEPTIONS.
                            dont forget to slack me the url to your github account as well.  
                            You can earn extra credit by using the provided css classes in the style tag or additionally 
                            you can pull in an external css library like bootstrap.  if you bring in bootstrap make sure to style
                            the buttons using bootstraps built in button styling classes.
                            Additionally, can earn extra credit by using an object to count the number of occurrences 
                            of each character accross all startup names and style and display the results as part of the
                            "cleanAndCountCharacters" function.
                            If you are having trouble getting started, I would spend a lot of time reviewing the source code provided in the reverse example.
                            Make sure I understand whats going on and do a google search on anything that is confusing.  
                            THE BETTER YOU UNDERSTAND THE EXAMPLE THE EASIER THIS SHOULD BE. THEN REVIEW THE TODOS AND START BY TRYING TO SOLVE THE EASIEST
                            PROBLEM.
                            FROM MY OWN EXPERIENCE, I FIND THAT WHEN IM STRUGGLING WITH A PROBLEM, IT USUALLY MEANS
                            I DONT FULLY UNDERSTAND THE TOOLS THAT I AM USING.
                            GOOD LUCK, SEE YOU ON THE FLIPPITY FLOP "\_(**/)_/"
                        `)
        }
        
    })()