import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { TodoState } from "../state/todo.state";
import { Todo } from "../models/todos";
import { DeleteTodo } from "../actions/todo.actions";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  @Select(TodoState.getTodoList) todos: Observable<Todo[]>;

  constructor(private store: Store) {}

  ngOnInit() {}

  deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }

  editTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }
}
