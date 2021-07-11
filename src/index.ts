/**
 * File: /src/index.ts
 * Project: react-gtk
 * File Created: 10-07-2021 17:57:27
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 10-07-2021 20:40:26
 * Modified By: Clay Risser <email@clayrisser.com>
 * -----
 * Silicon Hills LLC (c) Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import gi from 'node-gtk';

const Gtk = gi.require('Gtk', '3.0');

gi.startLoop();
Gtk.init();

const win = new Gtk.Window();
win.on('destroy', () => Gtk.mainQuit());
win.on('delete-event', () => false);

win.setDefaultSize(200, 80);
win.add(new Gtk.Label({ label: 'Hello Gtk+' }));

win.showAll();
Gtk.main();