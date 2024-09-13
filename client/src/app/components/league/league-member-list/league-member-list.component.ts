import { Component, Input, OnInit } from '@angular/core';
import { LeagueApiService } from '../../../services/api/league-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IsMemberAdded, LeagueMember, NewMemberData } from '../../../utils/interfaces/league.interface';
import { TableModule } from 'primeng/table';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { User } from '../../../utils/interfaces/user.interface';
import { ListboxClickEvent, ListboxFilterEvent, ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { GlobalHelper } from '../../../helpers/global.helper';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-league-member-list',
  standalone: true,
  imports: [TableModule, AsyncPipe, ButtonModule, ToolbarModule, ListboxModule, FormsModule, MessagesModule ],
  templateUrl: './league-member-list.component.html',
  styleUrl: './league-member-list.component.css'
})
export class LeagueMemberListComponent implements OnInit {
  constructor(
    private leagueService: LeagueApiService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private globalHelper: GlobalHelper
  ) {}


  ngOnInit(): void {
    if (!this.leagueId) this.leagueId = this.route.snapshot.parent?.params['leagueId'];
    this.$members = this.leagueService.getLeagueMembers(this.leagueId!);
  }

  leagueId?: number
  selectedUser?: User

  $members?: Observable<LeagueMember[]>
  $elegibleUsers?: Observable<User[]>
  $search?: Observable<User[]>

  // Este timeout se creará cada vez que se utiliza el buscador de los usuarios.
  // Esperará a que terminemos de escribir, y si se sigue escribiendo, se volverá a crear.
  // Hay que tipar la variable si o si con any, al intentar utilizar el tipo NodeJS.Timeout da errores.
  searchTimeout?: any;

  handleSearch = (originalEvent: ListboxFilterEvent) => {
    const value = String(originalEvent.filter);

    if (value == "") this.$elegibleUsers = of(); // of() crea un nuevo observable vacio.

    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => this.searchUsers(value), 500);
  }

  searchUsers = (search: string) => {
    this.$elegibleUsers = this.leagueService.searchNotMembers(this.leagueId!, search)
  }

  selectUser = ($event: ListboxClickEvent) => {
    const selectedUser = $event.option as User;

    const newMemberData: NewMemberData = {
      leagueId: this.leagueId!,
      userId: selectedUser.id!
    }

    this.leagueService.addMemberToLeague(newMemberData).subscribe((isMemberAdded: IsMemberAdded) => {
      this.handleAddingMember(isMemberAdded)
    });
  }

  handleAddingMember = (memberIsAdded: IsMemberAdded) => {
    this.globalHelper.showSuccessMessage("Exito", memberIsAdded.message, this.messageService);

    this.$members = this.leagueService.getLeagueMembers(this.leagueId!); // TODO: Cambiar esta chapuza.

  }
}

