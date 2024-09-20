import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// Model
class CounterModel {
  int counter = 0;

  void incrementCounter() {
    counter++;
  }
}

// View interface
abstract class CounterView {
  void updateCounter(int counter);
}

// Presenter
class CounterPresenter {
  final CounterModel _model;
  final CounterView _view;

  CounterPresenter(this._view) : _model = CounterModel();

  void increment() {
    _model.incrementCounter();
    _view.updateCounter(_model.counter);
  }
}

// View implementation
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: CounterPage(),
    );
  }
}

class CounterPage extends StatefulWidget {
  @override
  _CounterPageState createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> implements CounterView {
  late CounterPresenter _presenter;
  int _counter = 0;

  @override
  void initState() {
    super.initState();
    _presenter = CounterPresenter(this);
  }

  @override
  void updateCounter(int counter) {
    setState(() {
      _counter = counter;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("MVP Example"),
      ),
      body: Center(
        child: Text(
          "Counter: $_counter",
          style: TextStyle(fontSize: 24),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _presenter.increment(),
        child: Icon(Icons.add),
      ),
    );
  }
}
