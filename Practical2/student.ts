export class Student {
    name: string;
    rollNo: number;
    marks: number[];

    constructor(name: string, rollNo: number, marks: number[]) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    getAverage(): number {
        let total = this.marks.reduce((a, b) => a + b, 0);
        return total / this.marks.length;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Average Marks: ${this.getAverage().toFixed(2)}`);
        console.log('------------------------');
    }
}