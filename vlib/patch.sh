echo "Patching remote js file"

FILE=./dist/vlib-remote.js

#cat $FILE

sed -i.bak -e 's/src=/src="http:\/\/127.0.0.1:8081\/"+/g' $FILE
sed -i.bak -e 's/href=/href="http:\/\/127.0.0.1:8081\/"+/g' $FILE
