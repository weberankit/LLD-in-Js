2. Class Diagrams and Class Structure

What is a class diagram?
A class diagram represents:
1. The classes present in an application.
2. The relationships or connections between those classes.
To understand class diagrams, study two things:
- How to represent an individual class.
- How to represent relationships between classes.

2.1 Structure of a Class in UML
A class is represented using a rectangle divided into three compartments.
+-----------------------------+
| Car                         |
+-----------------------------+
| - brand: String             |
| - model: String             |
| - engineCC: int             |
+-----------------------------+
| + startEngine(): void       |
| + stopEngine(): void        |
| + accelerate(): void        |
| + brake(): void             |
+-----------------------------+

The three compartments are:
Compartment	Purpose
First	Class name
Second	Attributes / properties / variables
Third	Methods / behaviors


Class name
The first compartment contains the name of the class.

Example: Car
Attributes
Attributes represent the characteristics or properties of an object.

The Car class has these attributes:
Attribute	Type	Meaning
brand	String	Manufacturer or brand
model	String	Car model
engineCC	int	Engine capacity


UML attribute syntax:

visibility attributeName: DataType
For example:
- brand: String
Unlike declarations in languages such as C++, the attribute name is written before the data type in UML.
Methods
Methods represent the behavior of an object.

The Car class defines these methods:
- startEngine()
- stopEngine()
- accelerate()
- brake()
UML method syntax:
visibility methodName(parameters): ReturnType
For example:
+ startEngine(): void
Here, void means that the method does not return a value.

2.2 Access Modifiers in UML

The three access modifiers covered here are:
- Public
- Protected
- Private
They determine where attributes and methods can be accessed.
Access modifier comparison
Modifier	Same class	Child class	Outside class

Public	Yes	Yes	Yes
Protected	Yes	Yes	No
Private	Yes	No	No


This is the conceptual access model presented in the lecture. Exact behavior can differ by programming language.
UML notation
Modifier	Symbol	Example
Public	+	+ startEngine(): void
Protected	#	# engineCC: int
Private	-	- brand: String


Example: Car class
+-----------------------------+
| Car                         |
+-----------------------------+
| - brand: String             |
| - model: String             |
| # engineCC: int             |
+-----------------------------+
| + startEngine(): void       |
| + stopEngine(): void        |
| + accelerate(): void        |
| + brake(): void             |
+-----------------------------+

In this example:
- - brand: String means brand is private.
- - model: String means model is private.
- # engineCC: int means engineCC is protected.
- The + symbol means the listed methods are public.