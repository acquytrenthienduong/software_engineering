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

// Controller
class CounterController {
  final CounterModel _model;

  CounterController(this._model);

  int get counter => _model.counter;

  void increment() {
    _model.incrementCounter();
  }
}

// View
class MyApp extends StatelessWidget {
  final CounterController _controller = CounterController(CounterModel());

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("MVC Example"),
        ),
        body: CounterView(controller: _controller),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            _controller.increment();
          },
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}

class CounterView extends StatefulWidget {
  final CounterController controller;

  CounterView({required this.controller});

  @override
  _CounterViewState createState() => _CounterViewState();
}

class _CounterViewState extends State<CounterView> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        "Counter: ${widget.controller.counter}",
        style: TextStyle(fontSize: 24),
      ),
    );
  }

  @override
  void didUpdateWidget(CounterView oldWidget) {
    super.didUpdateWidget(oldWidget);
    setState(() {});
  }
}
