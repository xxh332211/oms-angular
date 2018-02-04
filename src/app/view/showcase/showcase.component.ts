import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  size = 'default';
  options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ];
  single = 'lucy';
  multiple = ['lucy'];
  tag = ['lucy'];
  tabs = [
    {
      index: 1,
      name: '提示框'
    },
    {
      index: 2,
      name: '表格'
    },
    {
      index: 3,
      name: '多选框'
    }
  ];
  tabledata = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  }, {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  }];
  createBasicNotification() {
    this._notification.blank('这是标题', '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案');
  }
  createNotification_2 = (type) => {
    this._notification.create(type, '这是标题', '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案');
  }
  constructor(private _notification: NzNotificationService) { };
  ngOnInit() {
  }
}
