import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/test', title: 'Reclamations', icon: 'ni-single-02 text-yellow', class: 'dropdown', children: [
        { path: '/dashboard_reclamation', title: 'Dashboard', icon: '', class: '' },
        { path: '/ajout-reclamation', title: 'Ajout Reclamation', icon: '', class: '' },
        { path: '/afficher-reclamation', title: 'Afficher Reclamation', icon: '', class: '' }
       
    ] },
    { path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '' }
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public menuItems: any[];
    public isCollapsed = true;

    constructor(private router: Router) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
        });
    }

    toggleDropdown(menuItem) {
        menuItem.isOpen = !menuItem.isOpen;
    }
}
