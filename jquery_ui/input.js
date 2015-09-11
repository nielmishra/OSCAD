                    var storageArray =[];
                    var tempArray =[];
                    function writedata() {
                        //console.log(document.getElementById("id1"));
                        tempArray.push({
                            'id':  document.getElementById("component-id").value,
                            'val': document.getElementById("component-val").value,
                            //'flag': "val" + flag,
                            'flag': document.getElementById("dialog").getAttribute("target"),
                        });
                        //console.log(storage_Array);
                    }
                    function set() {
                        for (var i = 0; i < tempArray.length; i++) {
                            var flag = 1;
                            for (var j = 0; j < storageArray.length; j++) {
                                if (tempArray[i].id == storageArray[j].id) { 
                                    flag = 0;
                                    break;
                                }
                            }
                            if(flag) {
                                storageArray.push(tempArray[i]);
                            }
                        }
                   }

                    function loop(evt){
                        var dialog = document.getElementById("dialog");
                        var cid = document.getElementById("component-id").value;
                        var cval = document.getElementById("component-val").value;

                        var target = dialog.getAttribute("target");
                        target = document.getElementById(target);
                        target.setAttribute("cid", cid);
                        target.setAttribute("cval", cval);

                        for(var i=0;i < 5; i++){
                            writedata();
                            set();
                        }
                        console.log(tempArray);
                        console.log(storageArray);
                    }

