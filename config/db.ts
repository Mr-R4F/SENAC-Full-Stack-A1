import fs from 'fs';
import path from 'path';

export class DB<T extends { id: number }> {
    private filePath: string;
    private data: T[] = [];

    constructor(fileName: string) {
        this.filePath = path.resolve(__dirname, `../database/${fileName}`);
        this.load();
    }

    private load() {
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, '[]');
        }

        const fileContent = fs.readFileSync(this.filePath, 'utf-8');
        this.data = JSON.parse(fileContent || '[]');
    }

    private save() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2));
    }

    index(): T[] {
        return this.data;
    }

    store(item: T): T {
        this.data.push(item);
        this.save();
        return item;
    }

    update(id: number, updatedItem: Partial<T>): T | null {
        const index: number = this.data.findIndex(item => item.id === id);
        if (index === -1) return null;

        this.data[index] = { ...this.data[index], ...updatedItem };
        this.save();
        return this.data[index];
    }

    delete(id: number): boolean {
        const initialLength: number = this.data.length;
        let changed: boolean = false;

        this.data = this.data.filter(item => item.id !== id);
        changed = this.data.length !== initialLength;
        if (changed) this.save();
        return changed;
    }

    findById(id: number): T | undefined {
        return this.data.find(item => item.id === id);
    }
}