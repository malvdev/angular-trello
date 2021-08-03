import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-ui-add-board-card',
  templateUrl: './add-board-card.component.html',
  styleUrls: ['./add-board-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBoardCardComponent {
  show: boolean = true;
  title: string = '';

  @Input()
  name: string;

  @Output()
  addEvent: EventEmitter<string> = new EventEmitter<string>();

  @HostBinding('class')
  class: string = 'app-add-board-card';

  @ViewChild('input')
  private readonly _inputRef: ElementRef;

  toggle() {
    this.show = !this.show;
  }

  add() {
    const title = this.title.trim();

    if (title) {
      this.addEvent.emit(title);
      this.toggle();
      this.title = '';
    } else {
      const input: HTMLInputElement = this._inputRef.nativeElement;
      input.focus();
      input.select();
    }
  }
}
