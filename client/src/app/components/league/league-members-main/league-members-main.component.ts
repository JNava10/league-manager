import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-league-members-main',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './league-members-main.component.html',
  styleUrl: './league-members-main.component.css'
})
export class LeagueMembersMainComponent {
}
