def completeDNA(dna):
    dna2 = []
    for n in dna:
        if n == "A":
            dna2.append("T")
        elif n == "T":
            dna2.append("A")
        elif n == "G":
            dna2.append("C")
        else:
            dna2.append("G")

    string = ""
    for x in dna2:
        string += x
    
    return string