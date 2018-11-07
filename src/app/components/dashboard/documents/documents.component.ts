import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DocumentItem } from '../../../models/documents.model';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent  {

  @Input() documentItems: DocumentItem;

}
