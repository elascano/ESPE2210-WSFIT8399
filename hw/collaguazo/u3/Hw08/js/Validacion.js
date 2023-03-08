function computeSlope(){
        var CoordX1= parseFloat(document.getElementById('CoordX1').value);
        var CoordX2= parseFloat(document.getElementById('CoordX2').value);
        var CoordY1= parseFloat(document.getElementById('CoordY1').value);
        var CoordY2= parseFloat(document.getElementById('CoordY2').value);

        var sum = ((CoordY2-CoordY1)/(CoordX2-CoordX1));

        alert("The slope of a line is --->"  + sum )

    }