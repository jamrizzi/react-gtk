import PropTypes from 'prop-types';
import Gtk from '../gtk';
import Element from './Element';

export default class AppChooserButton extends Element {
  static propTypes = {
    heading: PropTypes.string,
    showDefaultItem: PropTypes.bool,
    showDialogItem: PropTypes.bool,
    active: PropTypes.number,
    activeId: PropTypes.string,
    addTearoffs: PropTypes.bool,
    buttonSensitivity: PropTypes.object,
    cellArea: PropTypes.object,
    columnSpanColumn: PropTypes.number,
    entryTextColumn: PropTypes.number,
    hasEntry: PropTypes.bool,
    hasFrame: PropTypes.bool,
    idColumn: PropTypes.number,
    model: PropTypes.object,
    popupFixedWidth: PropTypes.bool,
    popupShown: PropTypes.bool,
    rowSpanColumn: PropTypes.number,
    tearoffTitle: PropTypes.string,
    wrapWidth: PropTypes.number,
    borderWidth: PropTypes.number,
    child: PropTypes.object,
    resizeMode: PropTypes.object
  };

  static defaultProps = {
    heading: null,
    showDefaultItem: null,
    showDialogItem: null,
    active: null,
    activeId: null,
    addTearoffs: null,
    buttonSensitivity: null,
    cellArea: null,
    columnSpanColumn: null,
    entryTextColumn: null,
    hasEntry: null,
    hasFrame: null,
    idColumn: null,
    model: null,
    popupFixedWidth: null,
    popupShown: null,
    rowSpanColumn: null,
    tearoffTitle: null,
    wrapWidth: null,
    borderWidth: null,
    child: null,
    resizeMode: null
  };

  constructor(props: object = {}) {
    super(new Gtk.AppChooserButton(), props, { isContainer: true });
  }

  appendCustomItem(name: string, label: string, icon: object): null {
    return this.node.appendCustomItem(name, label, icon);
  }

  appendSeparator(): null {
    return this.node.appendSeparator();
  }

  popdown(): null {
    return this.node.popdown();
  }

  popup(): null {
    return this.node.popup();
  }

  popupForDevice(device: object): null {
    return this.node.popupForDevice(device);
  }

  add(widget: object): null {
    return this.node.add(widget);
  }

  addWithProperties(widget: object, firstPropName: string, ___: object): null {
    return this.node.addWithProperties(widget, firstPropName, ___);
  }

  checkResize(): null {
    return this.node.checkResize();
  }

  childGet(child: object, firstPropName: string, ___: object): null {
    return this.node.childGet(child, firstPropName, ___);
  }

  childGetProperty(child: object, propertyName: string, value: object): null {
    return this.node.childGetProperty(child, propertyName, value);
  }

  childGetValist(
    child: object,
    firstPropertyName: string,
    varArgs: object
  ): null {
    return this.node.childGetValist(child, firstPropertyName, varArgs);
  }

  childNotify(child: object, childProperty: string): null {
    return this.node.childNotify(child, childProperty);
  }

  childNotifyByPspec(child: object, pspec: object): null {
    return this.node.childNotifyByPspec(child, pspec);
  }

  childSet(child: object, firstPropName: string, ___: object): null {
    return this.node.childSet(child, firstPropName, ___);
  }

  childSetProperty(child: object, propertyName: string, value: object): null {
    return this.node.childSetProperty(child, propertyName, value);
  }

  childSetValist(
    child: object,
    firstPropertyName: string,
    varArgs: object
  ): null {
    return this.node.childSetValist(child, firstPropertyName, varArgs);
  }

  childType(): object {
    return this.node.childType();
  }

  forall(callback: object, callbackData: object): null {
    return this.node.forall(callback, callbackData);
  }

  foreach(callback: object, callbackData: object): null {
    return this.node.foreach(callback, callbackData);
  }

  propagateDraw(child: object, cr: object): null {
    return this.node.propagateDraw(child, cr);
  }

  remove(widget: object): null {
    return this.node.remove(widget);
  }

  resizeChildren(): null {
    return this.node.resizeChildren();
  }

  unsetFocusChain(): null {
    return this.node.unsetFocusChain();
  }
}
