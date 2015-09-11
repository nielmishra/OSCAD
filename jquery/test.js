var flag1 = 0;
var flag3 = 0;
var flag5 = 0;
var flag8 = 0;
var flag11 = 0;
var flag12 = 0;
var flag14 = 0;
var flag15 = 0;
var flag16 = 0;
var flag17 = 0;
var flag18 = 0;
var flag19 = 0;
var flag20 = 0;
var flag21 = 0;
var flag22 = 0;
var flag23 = 0;
var flag24 = 0;
var flag25 = 0;
var lineflag=0;

$(document).ready(function () {
    var svgns = "http://www.w3.org/2000/svg"
    selectorVal = 0;
    templine= document.createElementNS(svgns, 'line');
    document.getElementById("viewport").appendChild(templine);


    var gObj = document.getElementById('viewport');

    function cursor() {
        selectorVal = 0
    }

    function resistor() {
        selectorVal = 1
    }

    function wire() {
        selectorVal = 2
    }

    function inductor() {
        selectorVal = 3
    }

    function ground() {
        selectorVal = 4
    }

    function capacitor() {
        selectorVal = 5
    }
    
    function battery() {
        selectorVal = 6
    }
    
    function currentsource() {
        selectorVal = 7
    }
    
    function diode() {
        selectorVal = 8
    }
    
     function fuse() {
        selectorVal = 9
    }
    function voltagesource() {
        selectorVal = 10
    }
    function npntransistor() {
        selectorVal = 11
    }
    function pnptransistor() {
        selectorVal = 12
    }
    function ammeter() {
        selectorVal = 13
    }
    function andgate() {
        selectorVal = 14
    }
    function orgate() {
        selectorVal = 15
    }
    function norgate() {
        selectorVal = 16
    }
    function notgate() {
        selectorVal = 17
    }
    function nandgate() {
        selectorVal = 18
    }
    function xorgate() {
        selectorVal = 19
    }
    function variableresistor() {
        selectorVal = 20
    }
    function variableinductor() {
        selectorVal = 21
    }
    function variablecapacitor() {
        selectorVal = 22
    }
    function photodiode() {
        selectorVal = 23
    }
    function zenerdiode() {
        selectorVal = 24
    }
    function dflipflop() {
        selectorVal = 25
    }

    $('.svg-main').click(function addComponent(event) {
        console.log(event)
        
        if (selectorVal == 1) addResistor(event);
        else if (selectorVal == 2) addWire(event);
        else if (selectorVal == 3) addinductor(event);
        else if (selectorVal == 4) addground(event);
        else if (selectorVal == 5) addcapacitor(event);
        else if (selectorVal == 6) addbattery(event);
        else if (selectorVal == 7) addcurrentsource(event);
        else if (selectorVal == 8) adddiode(event);
        else if (selectorVal == 9) addfuse(event);
        else if (selectorVal == 10) addvoltagesource(event);
        else if (selectorVal == 11) addnpntransistor(event);
        else if (selectorVal == 12) addpnptransistor(event);
        else if (selectorVal == 13) addammeter(event);
        else if (selectorVal == 14) addandgate(event);
        else if (selectorVal == 15) addorgate(event);
        else if (selectorVal == 16) addnorgate(event);
        else if (selectorVal == 17) addnotgate(event);
        else if (selectorVal == 18) addnandgate(event);
        else if (selectorVal == 19) addxorgate(event);
        else if (selectorVal == 20) addvariableresistor(event);
        else if (selectorVal == 21) addvariableinductor(event);
        else if (selectorVal == 22) addvariablecapacitor(event);
        else if (selectorVal == 23) addphotodiode(event);
        else if (selectorVal == 24) addzenerdiode(event);
        else if (selectorVal == 25) adddflipflop(event);
    });
	$('.svg-main').mousemove(function genstretch(event) {
        console.log(event)
        
        if (selectorVal == 2) mainstretch(event);
        
    });

    $('.resistor').click(function (event) {
        resistor()
    });
    $('.wire').click(function (event) {
        wire()
    });
    $('.cursor').click(function (event) {
        selectorVal = 0 ;
    });
    $('.capacitor').click(function (event) {
        capacitor()
    });
    $('.inductor').click(function (event) {
        inductor()
    });
     $('.ground').click(function (event) {
        ground()
    });
     $('.battery').click(function (event) {
        battery()
    });
     $('.currentsource').click(function (event) {
        currentsource()
    });
     $('.diode').click(function (event) {
        diode()
    });
     $('.fuse').click(function (event) {
        fuse()
    });
    $('.voltagesource').click(function (event) {
        voltagesource()
    });
    $('.npntransistor').click(function (event) {
        npntransistor()
    });
    $('.pnptransistor').click(function (event) {
        pnptransistor()
    });
    $('.ammeter').click(function (event) {
        ammeter()
    });
    $('.andgate').click(function (event) {
        andgate()
    });
    $('.orgate').click(function (event) {
        orgate()
    });
    $('.norgate').click(function (event) {
        norgate()
    });
    $('.notgate').click(function (event) {
        notgate()
    });
    $('.nandgate').click(function (event) {
        nandgate()
    });
    $('.xorgate').click(function (event) {
        xorgate()
    });
    $('.variableresistor').click(function (event) {
        variableresistor()
    });
    $('.variableinductor').click(function (event) {
        variableinductor()
    });
    $('.variablecapacitor').click(function (event) {
        variableinductor()
    });
    $('.photodiode').click(function (event) {
        photodiode()
    });
    $('.zenerdiode').click(function (event) {
        zenerdiode()
    });
    $('.dflipflop').click(function (event) {
        dflipflop()
    });
    function addWire(evt) {
		
		if(addWire.counter == 0)
		{
		tfm = getTransform();
        X1 = evt.pageX - tfm[0]; 
        Y1 = evt.pageY - tfm[1];
		templine.setAttributeNS(null, 'x1', X1-8);
		templine.setAttributeNS(null,'y1',Y1-58); 
		templine.setAttributeNS(null, 'x2',X1-8);
		templine.setAttributeNS(null,'y2',Y1-58);
		templine.setAttributeNS(null, 'style', "stroke:#FF2400;stroke-dasharray:10,10; d:M5 40 l215 0; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        templine.setAttributeNS(null, 'id',"templine");
        addWire.flag=1;
		addWire.counter=addWire.counter+1;
		}
		
		if(addWire.counter == 1)
		{
			if(addWire.flag!=1)
			{
			
			tfm = getTransform();
			X2 = evt.pageX - tfm[0]; 
			Y2 = evt.pageY - tfm[1];
			CX1= document.getElementById("templine").getAttribute('x1');
			CY1= document.getElementById("templine").getAttribute('y1'); 
			document.getElementById("templine").setAttribute('x2',X2);
			document.getElementById("templine").setAttribute('y2',Y2);
			line1= document.createElementNS(svgns, 'line');
			line1.setAttributeNS(null, 'x1', CX1 );
			line1.setAttributeNS(null,'y1',CY1 ); 
			line1.setAttributeNS(null, 'x2',X2-8);
			line1.setAttributeNS(null,'y2',Y2-58);
			line1.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
			line1.setAttributeNS(null, 'id',"lineval" + lineflag);
			document.getElementById("viewport").appendChild(line1);
			lineflag++;
			document.getElementById("templine").setAttribute('x1',X2);
			document.getElementById("templine").setAttribute('y1',Y2);
			document.getElementById("templine").setAttribute('x2',X2);
			document.getElementById("templine").setAttribute('y2',Y2);
			addWire.counter=0;
			addWire.flag=0;
			}
			else
			{
				if(addWire.flag!=0)
				addWire.flag=2;
			}
	
			}
			
	}
		
	addWire.counter=0;
    addWire.flag=0;

    function mainstretch(evt)
    {
		if(addWire.counter > 0 && addWire.flag==2)
		{
			tfm = getTransform();
			x= evt.pageX - tfm[0];
			y= evt.pageY - tfm[1];
			document.getElementById("templine").setAttribute("x2",x-8);
			document.getElementById("templine").setAttribute("y2",y-58);
		}
	}
    
    
    function addResistor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getresistor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'id', "R" + flag1);
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
        ++flag1;
    }

    function addinductor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'id', "L" + flag3);
        testElement.setAttributeNS(null, 'd', getinductor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
        ++flag3;
    }

    function addcapacitor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'id', "C" + flag5);
        testElement.setAttributeNS(null, 'd', getcapacitor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
        ++flag5;
    }
    
    function addground(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getground(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    
    function addbattery(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getbattery(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    
    function addcurrentsource(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getcurrentsource(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    
    function adddiode(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'id', "D" + flag8);
        testElement.setAttributeNS(null, 'd', getdiode(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
        ++flag8;
    }
    
    function addfuse(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getfuse(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    
    function addvoltagesource(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getvoltagesource(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    
      function addnpntransistor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getnpntransistor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    
      function addpnptransistor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getpnptransistor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    
    function addammeter(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getammeter(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    
     function addandgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getandgate(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addorgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getorgate(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addnorgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getnorgate(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addnotgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getnotgate(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addnandgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getnandgate(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addxorgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getxorgate(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addvariableresistor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getvariableresistor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addvariableinductor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getvariableinductor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addvariablecapacitor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getvariablecapacitor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addphotodiode(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getphotodiode(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function addzenerdiode(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getzenerdiode(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }
    function adddflipflop(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getdflipflop(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }





    function getresistor(ctX, ctY) {
        return "M" + ctX + " " + ctY + " l15 0 l2.5 -5 l5 10 l5 -10 l5 10 l5 -10 l5 10 l2.5 -5 l15 0";
    }

    function getwire(ctX1, ctY1, ctX2, ctY2) {
    return "M" + ctX1 + " " + ctY1 + "L" + ctX2 + " " + ctY2;
}

    function getinductor(ctX, ctY) {
        return "M" + ctX + " " + ctY + " L " + (ctX+11) + "," + ctY + " C  " + (ctX+11) + "," + (ctY) + " " + (ctX+11) + "," + (ctY-5) + " " + (ctX+16) + "," + (ctY-5) + "C " + (ctX+21) + "," + (ctY-5) + " " + (ctX+21) + "," + (ctY) + " " + (ctX+21) + "," + (ctY) + " C " + (ctX+21) + "," + (ctY) + " " + (ctX+21) + "," + (ctY-5) + " " + (ctX+26) + "," + (ctY-5) + " C " + (ctX+31) + "," + (ctY-5) + " " + (ctX+31) + "," + (ctY) + " " + (ctX+31) + "," + (ctY) + " C " + (ctX+31) + "," + (ctY) + " " + (ctX+31) + "," + (ctY-5) + " " + (ctX+36) + "," + (ctY-5) + " C " + (ctX+41) + "," + (ctY-5) + " " + (ctX+41) + "," + (ctY) + " " + (ctX+41) + "," + (ctY) + " C " + (ctX+41) + "," + (ctY) + " " + (ctX+41) + "," + (ctY-5) + " " + (ctX+46) + "," + (ctY-5) + " C " + (ctX+51) + "," + (ctY-5) + " " + (ctX+51) + "," + (ctY) + " " + (ctX+51) + "," + (ctY) + " L " + (ctX+64) + "," + (ctY) + "";
        }

    function getcapacitor(ctX, ctY) {
        return "M" + ctX + " " + ctY + " L "+ctX+","+(ctY+28)+" M "+(ctX-12)+","+(ctY+28)+" L "+(ctX+12)+","+(ctY+28)+" M "+(ctX-12)+","+(ctY+38)+" C "+(ctX-12)+","+(ctY+38)+" "+ctX+","+(ctY+32)+" "+(ctX+12)+","+(ctY+38)+" M "+ctX+","+(ctY+36)+" L "+ctX+","+(ctY+64)+"";
    }
    
    function getground(ctX, ctY) {
        return "M" + ctX + " " + ctY + " L "+ctX+","+(ctY+28)+" M "+(ctX-15)+","+(ctY+28)+" H "+(ctX+15)+"  M "+(ctX-11)+","+(ctY+32)+"H "+(ctX+11)+"M "+(ctX-5)+","+(ctY+36)+"H "+(ctX+5)+"";
    } 
    
     function getbattery(ctX, ctY) {
        return "M 0,25 H 25 M46,25 h 25 M 25,5 V 45 M32,15 V 33 M39,5 V 45 M46,15 V 33M16,10 l 0,6 M13,13 l 6,0 M50,13 l6,0";
    }
    
    function getcurrentsource(ctX, ctY) {
        return "M15,25A5,5 0 1,1 25,25  M25,25A5,5 0 1,0 35,25 M0,25H 9 M43,25 H 53 M8,25 A7,7 0 1,1 43,25 M8,25A7,7 0 1,0 43,25";
    }
    
     function getdiode(ctX, ctY) {
        return "M 0,25 H 25 M42,25 h 25 M 25,15 V 34 M42,15 V 34 M25,15 l17,11 M25,34 l17,-10";
    }
    
    function getfuse(ctX, ctY) {
        return "M2,20 h10 M12,10 v20 h40 v-20 z M52,20 h10 M12,20 h40";
    }
     function getvoltagesource(ctX, ctY) {
        return "M 2,20 H12  M 48,20 H58  M13,20 A 7,7 0 1,1 48,20 M13,20 A 7,7 0 1,0 48,20  M23,14 l 7,14 l 7,-14";
    }
     function getnpntransistor(ctX, ctY) {
        return "M20,40 A 10,10 0 1,1 70,40 M20,40 A 10,10 0 1,0 70,40 M8,40 h28 M36,26 v28 M36,34 l28,-12 l0,-10 M36,46 l28,12 l0,10 M10,10 v10 M10,10 A 4,2.5 0 1,1 10,15   M10,15 A 4,2.5 0 1,1 10,20 M75,5 A 2.5,2.5 0 1,0 75,15 m0,45 v11 l6,0 M75,61 l6,0 M75,66 l3.9,0 M62,56 l-3,-6 M62,56 l-7,2.5";
    }
    
    function getpnptransistor(ctX, ctY) {
        return " M20,40 A 10,10 0 1,1 70,40 M20,40 A 10,10 0 1,0 70,40 M8,40 h28 M36,26 v28 M36,34 l28,-12 l0,-10 M36,46 l28,12 l0,10 M10,10 v10 M10,10 A 4,2.5 0 1,1 10,15   M10,15 A 4,2.5 0 1,1 10,20 M78,65 A 2.5,2.5 0 1,0 78,75 M75,5 v11 M74,5 h6 M74,10 h5 M74,16 h6  M36,32 l5,-4 M36,34 l8,1";
    }
    
    function getammeter(ctX, ctY) {
        return "M 2,20 H12  M 48,20 H58 M13,20 A 7,7 0 1,1 48,20 M13,20 A 7,7 0 1,0 48,20 M22,29 l 6,-15 l6,15 M25,22 l6,0";
    }
    
    function getandgate(ctX, ctY) {
        return "M2,15 h10 M2,25 h10 M12,10 v20 h20 A10,10 0 1,0 32,10 h-20 M42,20 h10";
    }
    function getorgate(ctX, ctY) {
        return "M2,15 h12 M2,25 h12  M12,9 Q18,20  12,30  M12,9 Q72,20  12,30  M42,20 h10";
    }
    function getnorgate(ctX, ctY) {
        return "M2,15 h12 M2,25 h12  M12,9 Q18,20  12,30  M12,9 Q72,20  12,30  M42,20 A2,2 0 1,0 46,20 M42,20 A2,2 0 1,1 46,20M46,20 h10";
    }
    function getnotgate(ctX, ctY) {
        return "M2,20 h10 M12,10 v20 l25,-10 l-25,-9.1 M43,20 h10 M39,20 A2,2 0 1,1 43,20 M39,20 A2,2 0 1,0 43,20";
    }
    function getnandgate(ctX, ctY) {
        return "M2,15 h10 M2,25 h10 M12,9 v21 h20 A10,10 0 1,0 32,10 h-20 M42,20 A2,2 0 1,0 46,20 M42,20 A2,2 0 1,1 46,20M46,20 h10";
    }
    function getxorgate(ctX, ctY) {
        return "M2,15 h9 M2,25 h9 M8,9 Q14,20  8,30  M12,9 Q18,20  12,30  M12,9 Q72,20  12,30  M42,20 h10";
    }
    function getvariableresistor(ctX, ctY) {
        return "M10 15 l 15 0 l2.5 -5 l5 10 l5 -10 l5 10 l5 -10 l5 10 l2.5 -5 l15 0 M 28,28 l 21,-24 M 48.5,4 l -5,0 M 48.5,4 l 1.5,5";
    }
    function getvariableinductor(ctX, ctY) {
        return "M0,20 H10 M10,20 A5,6 0 1,1 18,20 M18,20 A5,6 0 1,1 26,20 M26,20 A5,6 0 1,1 34,20 M34,20 l 10,0 M14,26 l 20,-21 l-7,0 l7,0 l0,5.9";
    }
    function getvariablecapacitor(ctX, ctY) {
        return "M 20,0 L 20,28  M 8,28 L 32,28 M 8,34 l24,0 M 20,34 L 20,64 M 6,48 l25,-30 M31,18.5 l-7,0 M31,18.5 l0,7";
    }
    function getphotodiode(ctX, ctY) {
        return "M 0,25 H 25 M42,25 h 25 M 25,15 V 34 M42,15 V 34 M25,15 l17,11 M25,34 l17,-10 M35,6 l-5,8 M42,6 l-5,8 M30,14 l5,0  M30,14 l-2,-5 M37,14  l5,0  M37,14 l-1.8,-5";
    }
    function getzenerdiode(ctX, ctY) {
        return "M 0,25 H 25 M42,25 h 25 M 25,15 V 34 M42,15 V 34 M25,15 l17,11 M25,34 l17,-10 M42,16 h 5 M42,33 h -5";
    }
    function getdflipflop(ctX, ctY) {
        return "M2,17 h9 M2,32 h9  M12,9 v35 h25 v-35 z  m25,23 h9 m-9,-15 h9 M16,13 v7 M16,14 A3,2.5 0 1,1 16,19 M12,28 l5,3 l-5,3 M29,31 A1.5,3 0 1,1 32,31 M29,31 A1.5,3 0 1,0 32,31 M30.8,32.5 l3,4  M28,25.8 h5 M29,17 A1.5,3 0 1,1 32,17 M29,17 A1.5,3 0 1,0 32,17 M30.8,18.5 l3,4";
    }
    
    
    

    function getTransform() {
        var t = [0, 0];
        try {
            tStr = gObj.getAttributeNS(null, "transform").slice(7, -1).split(',');
            t[0] = parseInt(tStr[4]);
            t[1] = parseInt(tStr[5]);
        } catch (err) {
            console.log(err);
        }
        return t;
    }
});
