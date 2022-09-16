function checkCPF(cpfReceived) {
    Object.defineProperty(this, 'tidyCpf', {
        enumerable: true,
        get: function() {
            return cpfReceived.replace(/\D+/g, '');
        }
    });
}

checkCPF.prototype.check = function() {
    if(typeof this.tidyCpf === 'undefined') return false;
    if(this.tidyCpf.length !== 11) return false;
    if(this.isSequence()) return false;

    const cpfPartial = this.tidyCpf.slice(0, -2);
    const digit1 = this.createDigit(cpfPartial);
    const digit2 = this.createDigit(cpfPartial + digit1);

    const newCpf = cpfPartial + digit1 + digit2;
    return newCpf === this.tidyCpf;
}

checkCPF.prototype.createDigit = function(cpfPartial) {
    const cpfArray = Array.from(cpfPartial);
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressive * Number(val));
        regressive--;
        return ac;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
}

checkCPF.prototype.isSequence = function() {
    const sequence = this.tidyCpf[0].repeat(this.tidyCpf.length);
    return sequence === this.tidyCpf;
}

const cpf = new checkCPF('070.987.720-03');
console.log(cpf.check());
