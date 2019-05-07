# create custom jdk for springboot
    jlink --module-path jmods --compress=2 --add-modules java.base,java.logging,java.sql,java.desktop,java.management,java.security.jgss,java.instrument --no-header-files --no-man-pages --output ~/jdk-mini
