import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    products!: any[];
    storeProduct: any = []
    rangeDates!: Date[];

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.products = [
            {
                "uid": 1,
                "username": "sampleuser1",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "fullname": "Sample User One",
                "twubric": {
                    "total": 3.5,
                    "friends": 1,
                    "influence": 1,
                    "chirpiness": 1.5
                },
                "join_date": 1358899200
            },
            {
                "uid": 2,
                "username": "sampleuser2",
                "image": "https://randomuser.me/api/portraits/women/2.jpg",
                "fullname": "Sample User Two",
                "twubric": {
                    "total": 5,
                    "friends": 1,
                    "influence": 1,
                    "chirpiness": 1.5
                },
                "join_date": 1355270400
            },
            {
                "uid": 3,
                "username": "sampleuser3",
                "image": "https://randomuser.me/api/portraits/women/3.jpg",
                "fullname": "Sample User Three",
                "twubric": {
                    "total": 7,
                    "friends": 1,
                    "influence": 1,
                    "chirpiness": 1.5
                },
                "join_date": 1289433600
            },
            {
                "uid": 4,
                "username": "sampleuser4",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "fullname": "Sample User Four",
                "twubric": {
                    "total": 9,
                    "friends": 2,
                    "influence": 3,
                    "chirpiness": 4
                },
                "join_date": 1300838400
            },
            {
                "uid": 5,
                "username": "sampleuser5",
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
                "fullname": "Sample User Five",
                "twubric": {
                    "total": 9,
                    "friends": 1,
                    "influence": 4,
                    "chirpiness": 4
                },
                "join_date": 1230768000
            },
            {
                "uid": 6,
                "username": "sampleuser6",
                "image": "https://randomuser.me/api/portraits/men/6.jpg",
                "fullname": "Sample User Six",
                "twubric": {
                    "total": 6,
                    "friends": 2,
                    "influence": 3,
                    "chirpiness": 1
                },
                "join_date": 1252454400
            },
            {
                "uid": 7,
                "username": "sampleuser7",
                "image": "https://randomuser.me/api/portraits/women/7.jpg",
                "fullname": "Sample User Seven",
                "twubric": {
                    "total": 8,
                    "friends": 2,
                    "influence": 4,
                    "chirpiness": 2
                },
                "join_date": 1278201600
            },
            {
                "uid": 8,
                "username": "sampleuser8",
                "image": "https://randomuser.me/api/portraits/women/8.jpg",
                "fullname": "Sample User Eight",
                "twubric": {
                    "total": 7,
                    "friends": 2,
                    "influence": 3,
                    "chirpiness": 2
                },
                "join_date": 1331510400
            },
            {
                "uid": 9,
                "username": "sampleuser9",
                "image": "https://randomuser.me/api/portraits/men/9.jpg",
                "fullname": "Sample User Nine",
                "twubric": {
                    "total": 8,
                    "friends": 1,
                    "influence": 4,
                    "chirpiness": 3
                },
                "join_date": 1367971200
            },
            {
                "uid": 10,
                "username": "sampleuser10",
                "image": "https://randomuser.me/api/portraits/men/10.jpg",
                "fullname": "Sample User Ten",
                "twubric": {
                    "total": 5,
                    "friends": 1,
                    "influence": 1,
                    "chirpiness": 3
                },
                "join_date": 1228953600
            }
        ]
        this.storeProduct = this.products
    }

    onSelectDate() {
        let startDate = this.rangeDates[0]
        let endDate = this.rangeDates[1]
        if (startDate && endDate) {
            this.products = this.storeProduct.filter((product: any) => (new Date(product.join_date)) >= new Date(this.rangeDates[0]) && (new Date(product.join_date)) <= new Date(this.rangeDates[1]))
        }
    }

    onFilter(value: any, flag: any) {
        if (value == '') {
            this.products = this.storeProduct
        } else {
            switch (flag) {
                case 'total':
                    this.products = this.storeProduct.filter((val: any) => val.twubric.total == value)
                    break;
                case 'friends':
                    this.products = this.storeProduct.filter((val: any) => val.twubric.friends == value)
                    break;
                case 'influence':
                    this.products = this.storeProduct.filter((val: any) => val.twubric.influence == value)
                    break;
                case 'chirpiness':
                    this.products = this.storeProduct.filter((val: any) => val.twubric.chirpiness == value)
                    break;

                default:
                    break;
            }
        }
    }

    onClearDate() {
        this.products = this.storeProduct
    }

    onSortChange(value: any) {
        this.products = this.products.sort((a, b) => {
            if (value == 'accending')
                return -1;
            else
                return 1;
            return 0;
        })
    }

    deleteData(data: any) {
        this.products = this.products.filter((val: any) => val.uid != data.uid)
    }
}
