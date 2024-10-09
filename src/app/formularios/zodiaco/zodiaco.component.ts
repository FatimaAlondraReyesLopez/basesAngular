import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacFormComponent {
  zodiacForm: FormGroup;
  age: number = 0;
  zodiacSign: string = '';
assets: any;
images: any;

  constructor(private fb: FormBuilder) {
    this.zodiacForm = this.fb.group({
      day: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      month: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      gender: ['', Validators.required]
    });
  }

  calculateAge(): number {
    const birthDate = new Date(this.zodiacForm.value.year, this.zodiacForm.value.month - 1, this.zodiacForm.value.day);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getZodiacSign(): string {
    const year = this.zodiacForm.value.year;
    const chineseZodiac = ['rata', 'buey', 'tigre', 'conejo', 'dragon', 'serpiente', 'caballo', 'cabra', 'mono', 'gallo', 'perro', 'cerdo'];
    return chineseZodiac[(year - 4) % 12];
  }

  onSubmit(): void {
    this.age = this.calculateAge();
    this.zodiacSign = this.getZodiacSign();
  }
  
  }
