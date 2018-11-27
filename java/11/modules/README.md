compiling modules:
- javac -d out --module-source-path src/main/java --module ion.lab49.exos,ion.lab49.storybook

running compiled class:
- java --module-path out --module ion.lab49.storybook/ion.lab49.storybook.Provider

creating jar out of module:
- jar -c --file=out-jar/ion.lab49.exos.jar -C out/ion.lab49.exos .

creating jar out of module with main class defined:
- jar -c --file=out-jar/ion.lab49.storybook_main.jar --main-class=ion.lab49.storybook.Provider -C out/ion.lab49.storybook .

running jar:
- java --module-path out-jar -m ion.lab49.storybook/ion.lab49.storybook.Provider

running jar with main class defined:
- java -jar out-jar/ion.lab49.storybook.jar 

packing modules as standalone:
- jlink --module-path "out" --add-modules ion.lab49.exos,ion.lab49.storybook --output out-standalone

running standalone:
- bin/java --module ion.lab49.storybook/ion.lab49.storybook.Provider
