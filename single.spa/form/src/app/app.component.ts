import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { storeTodo, ITodo } from '@demo/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    const { title } = this.form.value;
    const todo: ITodo = {
      completed: true,
      id: storeTodo.id,
      text: title
    }
    storeTodo.addTodo(todo);
    this.form.reset();
  }
}
