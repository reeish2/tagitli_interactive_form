

function radio() { // פונקציה המופעלת בלחיצה על הכפתור צור
    var css = ""; //משתנה אשר ידפיס את אופן כתיבת התגית של פי בחירות המשתמש

    var identifier = document.querySelector('input[name="identifier"]:checked').value; // קליטת בחירת המשתמש בשאלה הראשונה "סוג תגית זיהוי"
    console.log(identifier);
    if (identifier === "id") { // הוספת ערך למשתנה CSS בהתאם לבחירת המשתמש
        css += "#";
    } else {
        css += ".";
    }
    
    var tagIdentifier = document.getElementById("tagIdentifier").value; // קליטת ערך שהוזן בתיבת הטקסט

    css += tagIdentifier + " {<br>"; // הוספת ערך של תיבת הטקסט למשתנה CSS
    var checkedCheckboxes = document.querySelectorAll('input:checked'); // קליטת כל הבחירות של המשתמש למשתנה כמערך
    console.log(checkedCheckboxes);

   var userChoice = ""; // משתנה להדפסת בחירות המשתמש בהודעה הקופצת
   for (var i = 0; i < checkedCheckboxes.length; i++) { // לולאה למעבר על בחירות המשתמש
       userChoice += checkedCheckboxes[i].parentElement.innerText + "\n"; // שרשור בחירות המשתמש (באמצעות קליטת הטקסט הראשי) וירידת שורה
   }
    alert("שם התגית שהזנת: " + tagIdentifier + "\n" + "הבחירות שלך:" + "\n" + userChoice); // הודעה קופצת המכילה את החירות המשתמש

    for(var i = 0; i < checkedCheckboxes.length; i++) { // לולאה למעבר על בחירות המשתמש
        var checkbox = checkedCheckboxes[i];
        if (checkbox.name === "identifier") // דילוג על בחירת המשתמש בשאלה הראשונה "סוג תגית זיהוי"
            continue;

        css += "  " + checkbox.dataset.css + "<br>"; // שרשור הערכים השמורים בתוך 'DATA-CSS' וירידת שורה
    }
    css += "}" 

    document.getElementById("output").innerHTML = css; // הדפסת השרשור
}

function change() { // פונקציה המשנה שקיפות וקוראת לפונקציית הבדיקה להפעלת הכפתור
    var images = document.querySelectorAll(".frame img.full-opacity"); // קליטת כל התמונות כמערך למשתנה
    for(var i = 0; i < images.length; i++) { // לולאה המסירה את היכולת לראות את התמונה במלואה (remove full opacity)
        images[i].classList.remove("full-opacity");
    }

    var checkedCheckboxes = document.querySelectorAll('input:checked'); // משתנה הקולט למערך את כל הבחירות שסומנו על ידי המשתמש
    console.log(checkedCheckboxes);
    for (var i = 0; i < checkedCheckboxes.length; i++) { // לולאה העוברת על בחירות המשתמש ומוסיפה את היכולת לראות את התמונה במלואה
        var checkbox = checkedCheckboxes[i];
        document.getElementById(checkbox.value).classList.add("full-opacity");// the value of the selected answer corresponds to the id of the relevant image
    }

    var button = document.getElementById("submitBtn"); // קליטת הכפתור לתוך משתנה
    button.disabled = !isFormValid(); // קריאה לפוקנציה שמחזריה משתנה בוליאני ומשנה את זמינות הכפתור בהתאם
}

function isFormValid() { // פוקנצייה הבודקת שהמשתמש ענה על כל השאלות והזין ערך בתיבת הטקסט ומחזיר משתנה בוליאני בהתאם
    var identifier = document.querySelector('input[name="identifier"]:checked'); // בדיקה שנבחרה תשובה בשאלה הראשונה (כך גם ביתר שאלות הבחירה)
    if (!identifier) return false;
    
    var fontFamily = document.querySelector('input[name="font-family"]:checked');
    if (!fontFamily) return false;
    
    var color = document.querySelector('input[name="color"]:checked');
    if (!color) return false;
    
    var styling = document.querySelector('input[name="styling"]:checked');
    if (!styling) return false;

    var spacing = document.querySelector('input[name="spacing"]:checked');
    if (!spacing) return false;

    var tagIdentifier = document.querySelector('input[name="tagIdentifier"]').value; // בדיקה שהוזן ערך בתיבת הטקסט
    if(!tagIdentifier) return false;

    return true; // במידה ולא הוחזר FALSE באף אחד מהתנאים יוחזר TRUE
}